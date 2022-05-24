import React, { useState } from "react";
import { getWinner, isBoardFull } from "../../Util/util";
import Row from "./Row";
// import Square from "../Square/Square";
// import { calculateWinner } from "../../Util/util";

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

    cells[cellNumber] = xIsNext ? "X" : "O";

    if (getWinner(cells)) {
      setWinner(cells[cellNumber]);
    }

    setSquares(cells);
    setXIsNext((prevState) => !prevState);
    isBoardFull(cells);
  };

  const status = winner
    ? `Winner :${winner}`
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
