import React, { useContext } from "react";
import { CalculatorContext } from "./App";
const TopSection = ({ DisplayValue }) => {
  const { input, historyHandleToggle } = useContext(CalculatorContext);
  return (
    <div className="screen ">
      <input type="text" value={input} readOnly onChange={DisplayValue} />
      <button
        type="button"
        onClick={historyHandleToggle}
        className="history-btn"
      >
        <i className="fa fa-history"></i>
      </button>
    </div>
  );
};

export default TopSection;
