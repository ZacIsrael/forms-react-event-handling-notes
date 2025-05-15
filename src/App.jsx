import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  // keeps track of the state of the name which will be updated as the user makes changes in the input element below
  const [name, setName] = useState("");

  function handleChange(event){

    // variable that stores what the user has typed
    let val = event.target.value;

    // variable that stores the type of input that is expected
    let type = event.target.type;

    // variable that stores the placeholder text
    let placeholder = event.target.placeholder;

    console.log("handleChange: val = ", val, "type = ", type, "placeholder = ", placeholder);
    // sets the value of the name to the value of the user's input as they type
    setName(val);
  }

  return (
    <>
      <div className="container">
        <h1>Hello {name} </h1>
        {/* onChange is triggered every time the value of the input changes */}
        <input onChange={handleChange} type="text" placeholder="What's your name?" />
        <button>Submit</button>
      </div>
    </>
  );
}

export default App;
