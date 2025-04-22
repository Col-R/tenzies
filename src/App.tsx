import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
// components
import Die from './components/Die';

// helper functions
import { generateAllNewDice } from './utilities/algorithms';
import useScreenSize from './utilities/dom';

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [moves, setMoves] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  // toggles isHeld
  function hold(id: string) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function buttonClickHandler() {
    if (isGameWon === true) {
      setDice(generateAllNewDice());
      setIsGameWon(false);
      setMoves(0);
    } else {
      rollDice();
    }
  }

  // rolls the dice, keeps the isHeld dice as is
  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
    setMoves(moves + 1);
  }

  // is game won
  useEffect(() => {
    const isHeldAndMatched = (die: any) =>
      die.isHeld && die.value === dice[0].value;

    if (dice.every(isHeldAndMatched)) {
      setIsGameWon(true);
    }
  }, [dice]);

  const { width, height } = useScreenSize();

  return (
    <main className='bg-gray-200 mx-auto rounded-lg shadow-lg h-[100%] display flex flex-col justify-center items-center'>
      {isGameWon && <Confetti width={width} height={height} />}
      <p className='text-lg flex justify-center px-5 text-center'>
        {isGameWon
          ? `Well played! You got Tenzies in ${moves} moves!`
          : 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'}
      </p>
      <div className='grid grid-cols-5 gap-4 p-4'>
        {dice.map((die) => (
          <Die
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            hold={hold}
          />
        ))}
      </div>
      <button
        onClick={buttonClickHandler}
        className='text-xl text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-600 cursor-pointer transition-colors'
      >
        {isGameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
