function ErrorView({ message, retry }) {
  return (
    <div className="error-box">
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={retry}>Try Again</button>
    </div>
  );
}

export default ErrorView;