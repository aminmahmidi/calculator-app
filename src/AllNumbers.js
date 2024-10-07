import React, { useContext } from "react";
import { Operators, Numbers } from "./data";
import { CalculatorContext } from "./App";
const AllNumbers = () => {
  const { input, setInput } = useContext(CalculatorContext);
  const handleClick = (e) => {
    const value = e.target.textContent;
    setInput(input + value);
  };
    const clear = () => {
      setInput("");
    };
  return (
    <div className="numbers">
      {Numbers.map((number) => {
        return (
          <button
            type="button"
            className="number"
            onClick={handleClick}
            key={number}
          >
            {number}
          </button>
        );
      })}
      <button type="button" className="number"  onClick={clear}>
        c
      </button>
    </div>
  );
};

export default AllNumbers;
