import React from "react";
import Cell from "./Cell";

export default function Row(props) {
  const { number, buttonClick, cells } = props;
  return (
    <div className="board-row">
      {Array(3)
        .fill(0)
        .map((cell, index) => (
          <Cell
            key={number * 3 + index}
            number={number * 3 + index}
            onClick={buttonClick}
            value={cells[index]}
          />
        ))}
    </div>
  );
}
