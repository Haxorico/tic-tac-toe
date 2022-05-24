import React from "react";
import "./Cell.css";

export default function Cell(props) {
  const { number, value, onClick } = props;
  return (
    <button className="cell" onClick={() => onClick(number)}>
      {value}
    </button>
  );
}
