function Child({ message, updateMessage }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Child Component</h2>
      <p>Received: {message}</p>

      <button onClick={() => updateMessage("Message updated from Child")}>
        Update Message
      </button>
    </div>
  );
}

export default Child;