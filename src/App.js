import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    // Code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    // Code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    // Code for the divide function 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    // Code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0
  };

  function resetResult(e) {
    // Code for the resetResult function 
    e.preventDefault();
    setResult((result) => result * 0)
  };

  return (
    <div className="App">
      <div>
        <h1>Basic Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* Value of the current total */}
         Result: {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* subtract button */}
        <button onClick={minus}>Subtract</button>
        {/*  multiply button */}
        <button onClick={times}>Multiply</button>
        {/* divide button */}
        <button onClick={divide}>Divide</button>
        {/* resetInput button */}
        <button onClick={resetInput}>Reset Input</button>
        {/* resetResult button */}
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App; 
