export function generateAllNewDice() {
  return new Array(10).fill(0).map(generateRandomDiceRoll);
}

export function generateRandomDiceRoll() {
  return Math.ceil(Math.random() * 6);
}
