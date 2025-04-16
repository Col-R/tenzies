import { useState } from 'react';
// components
import Die from './components/Die';

// functions
import { generateAllNewDice } from './utilities/algorithms';

function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  return (
    <main className='bg-gray-200 mx-auto rounded-lg shadow-lg h-[100%] display flex flex-col justify-center items-center'>
      Care to shoot some dice?
      <div className='grid grid-cols-5 gap-4 p-4'>
        {dice.map((num, index) => (
          <Die key={index} value={num} />
        ))}
      </div>
      <button
        onClick={() => setDice(generateAllNewDice())}
        className='text-xl bg-purple-400 rounded px-6 py-2 hover:bg-purple-500 cursor-pointer transition-colors'
      >
        Roll
      </button>
    </main>
  );
}

export default App;
