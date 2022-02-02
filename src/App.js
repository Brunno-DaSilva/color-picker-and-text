import "./App.css";
import React, { useState } from "react";

function App() {
  const [userColor, setUserColor] = useState("#cecece");
  const [userText, setUserText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setUserColor("#cecece");
    setUserText("");
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          type="text"
          placeholder="Add Text ... 🔊"
        ></input>
        <input
          value={userColor}
          onChange={(e) => setUserColor(e.target.value)}
          type="color"
        ></input>
      </form>
      <div className="div" style={{ background: `${userColor}` }}>
        <h2>{userText}</h2>
      </div>
    </div>
  );
}

export default App;
