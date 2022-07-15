import React from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
