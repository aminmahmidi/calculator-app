import "../src/styles/style.css";
import "../src/fontawesome-free-6.5.2-web/css/all.css";
import { createContext, useEffect, useState, useRef } from "react";
import Input from "./Input";
import Buttons from "./Buttons";
// console.log(HistoryContext)
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
      <div className="App">
        <div className="calculator">
          <form onSubmit={handleSubmit}>
            {/* history panel */}
            {/* End of history panel */}

            {/* Calculator header */}
            <Input />
            {/* End of Calculator header */}

            {/* Numbers */}
            <Buttons />
            {/* End of Numbers */}

            {/* Operators */}

            {/* End of Operators */}
          </form>
        </div>
      </div>
  );
}

export default App;
