import React from "react";

export const Todo = ({ todo }) => (
  <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
    <div style={{ fontSize: 32 }}>{todo.title}</div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {todo.completed ? "✅ Done" : "❌ Incomplete"}
    </div>
  </div>
);
