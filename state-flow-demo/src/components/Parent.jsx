import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>State Flow Demo</h1>

      <Child message={message} updateMessage={updateMessage} />

      <Display message={message} />
    </div>
  );
}

export default Parent;