import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  function handleOnChange(){
    console.log("Event changing.");
  }

  return (
    <>
      <div className="container">
        <h1>Hello </h1>
        {/* onChange is triggered every time the value of the input changes */}
        <input onChange={handleOnChange} type="text" placeholder="What's your name?" />
        <button>Submit</button>
      </div>
    </>
  );
}

export default App;
