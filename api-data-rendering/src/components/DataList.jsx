function DataList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataList;