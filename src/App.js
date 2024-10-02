import "../src/styles/style.css";
import "../src/fontawesome-free-6.5.2-web/css/all.css";
import AllNumbers from "./AllNumbers";
import AllOperators from "./AllOperators";
import { useState, createContext } from "react";
export const CalculatorContext = createContext();
function App() {
  const [input, setInput] = useState('');
  const DisplayValue = (e) => {
    setInput(e.target.value);
  }
  return (
    <CalculatorContext.Provider value={{input, setInput}}>
      <div className="App">
        <div className="calculator">
          <div className="screen ">
            <input type="text" value={input} readOnly onChange={DisplayValue} />
            <button type="button" className="history-btn">
              <i className="fa fa-history"></i>
            </button>
          </div>
          <div className="dial-pad">
            <AllNumbers />
            <AllOperators />
          </div>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
