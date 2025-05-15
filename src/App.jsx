import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  // keeps track of the state of the name (what the user types into the input HTML element below)
  const [name, setName] = useState("");

  // keeps track of the text stored inside of the h1 tag. Will be updated once the user clicks the submit button
  const [headingText, setHeadingText] = useState("");

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

  function handleClickSubmitBtn (){
    console.log("handleClickSubmitBtn(): ");

    // retrieve the button that was clicked
    let btn = event.target;
    // make the background of the button black once it's clicked
    btn.style.backgroundColor = "black";

    // turn the background back white after 0.05 seconds
    setTimeout(() => {
      btn.style.backgroundColor = "white";
    }, 50);

    // updates the headingText with name that the user typed in to the input HTML element
    setHeadingText(name);
  }

  return (
    <>
      <div className="container">
        <h1>Hello {headingText} </h1>
        {/* onChange is triggered every time the value of the input changes */}
        <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
        <button onClick={handleClickSubmitBtn}>Submit</button>
      </div>
    </>
  );
}

export default App;
