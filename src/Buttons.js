import { useState, useContext } from "react";
import { Numbers, Operators } from "./data";
import { inputContext } from "./Input";
const Buttons = () => {
  const [number, setNumbers] = useState(Numbers);
  // const { setNumInput } = useContext(inputContext);
  return (
    <>
      <span></span>
      <div className="dial-pad">
        <div className="numbers">
          {number.map((number, index) => {
            return (
              <button key={index} type="button" className="number">
                {number}
              </button>
            );
          })}
        </div>
        <div className="operators">
          {Operators.map((item, index) => {
            return (
              <button key={index} type="button" className="operators-btn">
                {item}
              </button>
            );
          })}
          <button type="button">c</button>
          <button type="submit">=</button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
