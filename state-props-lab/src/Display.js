import React from "react";

function Display({ value }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>The counter value is: {value}</h2>
    </div>
  );
}

export default Display;