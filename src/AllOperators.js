import React, { useContext } from "react";
import { Operators } from "./data";
import { CalculatorContext } from "./App";
const AllOperators = () => {
  const { input, setInput } = useContext(CalculatorContext);
  const handleClick = (e) => {
    const value = e.target.textContent;
    setInput(input + value);
  };
  const equal = (e) => {
    e.preventDefault()
    try {
      setInput(eval(input))
    } catch (error) {
     setInput('خطا')
    }
    
  }
  return (
    <div className="operators">
      {Operators.map((operator) => {
        return (
          <button type="button" className="operator" onClick={handleClick}>
            {operator}
          </button>
        );
      })}
      <button type="button" className="clear">
        c
      </button>
      <button type="submit" onClick={equal}>=</button>
    </div>
  );
};

export default AllOperators;
