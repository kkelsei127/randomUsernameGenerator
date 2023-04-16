import { useState } from "react";
import {getRanName} from "../utils/helpers"



export default function Username() {
  
  const [username, setUsername] = useState();

  return (
    <div className="App">
      <h1>Click the button to get a random username!</h1>
      <button onClick={() => setUsername(getRanName)}>Generate</button>
      <div>{username}</div>
    </div>
  );
}