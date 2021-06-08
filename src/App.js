import {react, useState} from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TextBox from "./components/TextBox.jsx";
import SubmitBtn from "./components/SubmitBtn.jsx";
import DisplayList from "./components/DisplayList.jsx";
import DisplayCompList from "./components/DisplayCompList";
// import Devor from "./components/Devor.jsx";


function App() {
  const [burgerName, setBurgerName] = useState("");
  const [listOfBurgers, setListOfBurgers] = useState([]);


  return (
    <div className="baap">
      <Header/>
      <DisplayList listOfBurgers={listOfBurgers} setListOfBurgers={setListOfBurgers}/>
      <DisplayCompList listOfBurgers={listOfBurgers}/>
      <TextBox setBurgerName={setBurgerName} burgerName={burgerName} />
      <SubmitBtn setListOfBurgers={setListOfBurgers} burgerName={burgerName} setBurgerName={setBurgerName} listOfBurgers={listOfBurgers}/>
      
    </div>
  );
}

export default App;




