import React, { useState } from "react";
import { getGameStatus } from "../../Util/util";
import Row from "./Row";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [error, setError] = useState("");

  const cellOnClickHandler = (cellNumber) => {
    const cells = squares.slice();
    if (cells[cellNumber]) {
      setError("Cell is already taken. Pick another cell");
      return;
    }
    if (error) setError("");
    cells[cellNumber] = xIsNext ? "X" : "O";

    const gameStatus = getGameStatus(cells);
    if (gameStatus.status === "over") {
      setWinner(gameStatus.winner);
    }

    setSquares(cells);
    setXIsNext((prevState) => !prevState);
  };

  const status = winner
    ? winner === "Draw"
      ? "Draw"
      : `Winner :${winner}`
    : "Next Player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      {!winner && (
        <>
          {Array(3)
            .fill(0)
            .map((row, index) => (
              <Row
                key={index}
                number={index}
                buttonClick={cellOnClickHandler}
                cells={squares.slice(index * 3, index * 3 + 3)}
              />
            ))}
        </>
      )}
      {error && <div className="error">{error}</div>}
    </>
  );
}
