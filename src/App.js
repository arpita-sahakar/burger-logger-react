import { react, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TextBox from "./components/TextBox.jsx";
import SubmitBtn from "./components/SubmitBtn.jsx";
import DisplayInCompleteList from "./components/DisplayInCompleteList.jsx";
import DisplayCompList from "./components/DisplayCompList";
// import Devor from "./components/Devor.jsx";

function App() {
  const [burgerName, setBurgerName] = useState("");
  const [listOfBurgers, setListOfBurgers] = useState([]);
  const [complete, setComplete] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("burgerkey") != null) {
      setListOfBurgers(JSON.parse(localStorage.getItem("burgerkey")));
    }
  }, []); 
  
  useEffect(() => {
    completeList();
    inCompleteList();
    localStorage.setItem("burgerkey", JSON.stringify(listOfBurgers));
  }, [listOfBurgers]);



  const completeList = () => {
    setComplete(
      listOfBurgers.filter((el) => {
        return el.devour === true;
      })
    );
  };

  const inCompleteList = () => {
    setIncomplete(
      listOfBurgers.filter((el) => {
        return el.devour === false;
      })
    );
  };

  return (
    <div className="baap">
      <Header />
      <DisplayInCompleteList
        listOfBurgers={listOfBurgers}
        incomplete={incomplete}
        setListOfBurgers={setListOfBurgers}
      />
      <DisplayCompList complete={complete} />

      <TextBox setBurgerName={setBurgerName} burgerName={burgerName} />
      <SubmitBtn
        setListOfBurgers={setListOfBurgers}
        burgerName={burgerName}
        setBurgerName={setBurgerName}
        listOfBurgers={listOfBurgers}
      />
    </div>
  );
}

export default App;
