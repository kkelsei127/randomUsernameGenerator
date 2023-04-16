import { useState } from "react";

export default function Username() {
  const [rnd, setRnd] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setRnd(Math.floor(Math.random() * 50))}>
        gen randomn num
      </button>
      <div>{rnd}</div>
    </div>
  );
}