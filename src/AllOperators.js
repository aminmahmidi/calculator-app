import React, { useContext } from "react";
import { Operators } from "./data";
import { CalculatorContext } from "./App";
const AllOperators = () => {
  const { input, setInput , equal} = useContext(CalculatorContext);
  const handleClick = (e) => {
    const value = e.target.textContent;
    setInput(input + value);
  };
  return (
    <div className="operators">
      {Operators.map((operator) => {
        return (
          <button
            type="button"
            className="operator"
            key={operator}
            onClick={handleClick}
          >
            {operator}
          </button>
        );
      })}
      <button type="submit" onClick={equal}>
        =
      </button>
    </div>
  );
};

export default AllOperators;
