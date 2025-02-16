import { useState } from "react";
import "./index.css";

function getDefault() {
  const val = 100;
  console.log("HEAVY COMPUTATION! \nINITIAL VALUE : ", val);
  return val;
}

function Counter() {

  // we will get our initial state from getDefault
  // after that state will get updated on the basis of setCount

  const [count, setCount] = useState(getDefault);
  console.log("current: " + count);


  function newcallbackfn(previous) {
    console.log("previous: " + previous);
    console.log("count :" + count);
    return count - 1;
  }

  return (
    <div className="counter">
      <h1 className="counter-title">Counter</h1>
      <div className="counter-value">{count}</div>
      <div className="counter-controls">
        <button
          onClick={() => {
            setCount((prev) => {
              let newval = prev - 1;
              return newval;
            });
            // setCount(count-1);
          }}
          className="counter-decrement"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="counter-increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;



// useState(getDefault()) -- executes immediately on render and is called on every render
// useState(getDefault) -- passed by ref and runs only on first render and memorize the value -- lazy optimisation

// in the setter function --
// you can pass the directly or pass a callback function
// the difference is that
// the callback function takes the previous value -- even if multiple updates happen quickly, react ensures each update gets the correct prev value
// while passing the direct value takes the current value -- that will create issues when multiple updates happen quickly -- lost updates dues to re-render on each update