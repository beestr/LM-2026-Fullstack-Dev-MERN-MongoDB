import React, { useState } from "react";

function Counter({ label, onCountChange }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{label}: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;