import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <div class='counter-container'>
        <div class='counter-card'>
          <h2 className='counter-title'>Counter</h2>

          <div class='counter-va'>{count}</div>

          <div className='counter-buttons'>
            <button className='btn increment' onClick={increment}>
              +
            </button>
            <button className='btn decrement' onClick={decrement}>
              -
            </button>
            <button className='btn reset' onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
