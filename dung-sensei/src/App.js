import { useState } from 'react'
import './App.css'

export default function App() {
  const [left, setLeft] = useState(true);
  const theme = {
    backgroundColor: "lightgreen",
    display: "flex",
    justifyContent: left ? "flex-start" : "flex-end",
  };

  return (
    <div>
      <div>
        <div style={theme}>
          <h3>LOGIN</h3>
        </div>
        <div>
          <button onClick={() => setLeft(!left)}>
            Change Position
          </button>
        </div>
      </div>
    </div>
  );
}