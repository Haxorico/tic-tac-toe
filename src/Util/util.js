import _ from "lodash";

export function getWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

//TODO rename this function or make it get other paramter
//If the function checks if board is full it should get a Board as a paramter.
//Although a Board is just an array of cells..
export function isBoardFull(cells) {
  const freeCellsAmount = _.filter(cells, (cell) => cell === "").length;
  return freeCellsAmount === 0;
}

export function getGameStatus(cells) {
  const winner = getWinner(cells);
  if (winner) {
    return { status: "over", winner };
  }
  if (isBoardFull(cells)) {
    return { status: "over", winner: "Draw" };
  }
  return { status: "running", winner: "" };
}
