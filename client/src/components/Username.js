import { useState } from "react";
import GetRanName from "../utils/helpers"



export default function Username() {
  const [username, setUsername] = useState("");
  
  function GetName() { 
    const randomName = GetRanName();
    console.log("hello")
    console.log("randomName", randomName);
    setUsername(randomName);
  }

  
  return (
    <div className="App">
      <h1>Click the button to get a random username!</h1>
      <button onClick={()=>GetName()}>Generate</button>
      <div>{username}</div>
    </div>
  );
}