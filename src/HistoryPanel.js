import React, { useContext } from "react";
import { CalculatorContext } from "./App";

const HistoryPanel = () => {
  const { historyToggle, setHistoryToggle, result, setResult } =
    useContext(CalculatorContext);
  
  const handleDelete = (index) => {
    const newResult = result.filter((_, i) => i !== index);
    setResult(newResult);
  };
  return (
    <>
      <div className="history-panel">
        <button
          type="button"
          className="close-panel-btn"
          onClick={() => setHistoryToggle(false)}
        >
          <i className="fa fa-times"></i>
        </button>
        <div className="history-item-container">
          {result ? (
            <ul style={{padding:0}}>
              {result.map((item, index) => (
                <li key={index} className="history-item">
                  {item}
                  <button
                    className="delete-item"
                    onClick={() => handleDelete(index)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div> kkk </div>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default HistoryPanel;
