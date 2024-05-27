import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import { useState } from "react";
import Child from "./components/Child";
import FourthComponent from "./components/FourthComponent";

const medicalRecord = {
  heightCM: 180,
  bloodType: "A+",
  allergies: "None",
};

function App() {
  const [name, setName] = useState("Lina");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>
        <FourthComponent />
        <p>{message}</p>
        <Child name={name} addMessage={addMessage} setName={setName} />
        <SecondComponent />
        <ThirdComponent name="John" lastName="Doe" card={medicalRecord} />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
