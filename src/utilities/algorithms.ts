export function generateAllNewDice() {
  return new Array(10).fill(0).map(generateRandomDiceRoll);
}

export function generateRandomDiceRoll() {
  const value = Math.ceil(Math.random() * 6);
  return { value: value, isHeld: false };
}
