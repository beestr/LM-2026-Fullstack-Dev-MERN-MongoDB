import { useState, useEffect, useCallback } from "react";

function App() {
  // useState Hook
  const [count, setCount] = useState(0);

  // function for updating state
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useEffect Hook
  useEffect(() => {
    console.log("Count updated:", count);

    // cleanup
    return () => {
      console.log("Cleanup before next effect");
    };
  }, [count]);

  return (
    <div>
      <h1>Hook Usage Demo</h1>
      <h2>Counter: {count}</h2>

      <button onClick={incrementCount}>
        Increase Count
      </button>
    </div>
  );
}

export default App;