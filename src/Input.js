import { createContext, useEffect, useState } from "react";
import History from "./History";
export const inputContext = createContext();
const Input = () => {
  const [history, setHistory] = useState(false);
  const [numInput, setNumInput] = useState(parseInt(2));
  const ToggleHistory = () => {
    setHistory(!history);
  };
  return (
    <inputContext.Provider value={setNumInput}>
      <>
        <div className="screen">
          <input
            type="text"
            id="screen"
            onChange={(e) => {
              setNumInput(e.target.value);
            }}
            value={numInput}
          />
          <button type="button" onClick={ToggleHistory} className="history-btn">
            <span className="fas fa-history"></span>
          </button>
        </div>
        <div className="total-screen">
          <span className="second-screen">00</span>
        </div>
        <History ToggleHistory={ToggleHistory} history={history} />
      </>
    </inputContext.Provider>
  );
};

// const handleInput = (e) => {
//   inputRef.current = parseInt(e.target.value);
//   // Validate input using regex
//   if (/^[0-9+\-*/().]*$/.test(inputValue)) {
//     setInputValue(inputRef);
//   }
// };

export default Input;
