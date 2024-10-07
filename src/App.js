import "../src/styles/style.css";
import "../src/fontawesome-free-6.5.2-web/css/all.css";
import AllNumbers from "./AllNumbers";
import AllOperators from "./AllOperators";
import { useState, createContext } from "react";
import HistoryPanel from "./HistoryPanel";
import TopSection from "./TopSection";
export const CalculatorContext = createContext();
function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [historyToggle, setHistoryToggle] = useState(false);
  const DisplayValue = (e) => {
    setInput(e.target.value);
  };
  const historyHandleToggle = () => {
    setHistoryToggle(!historyToggle);
  };
  const equal = (e) => {
    e.preventDefault();
    try {
      const calculate = eval(input);
      setInput(calculate);
      setResult([...result , `${input} = ${calculate}`]);
    } catch (error) {
      setInput("خطا");
    }
  };
  return (
    <CalculatorContext.Provider
      value={{
        input,
        setInput,
        historyToggle,
        setHistoryToggle,
        historyHandleToggle,
        equal,
        result,
        setResult,
      }}
    >
      <div className="App">
        <div className="calculator">
          <TopSection DisplayValue={DisplayValue} />
          <div className="dial-pad">
            <AllNumbers />
            <AllOperators />
            {historyToggle && <HistoryPanel />}
          </div>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
