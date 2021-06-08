import React from "react";

function SubmitBtn({setListOfBurgers, burgerName, listOfBurgers, setBurgerName}) {

  const addToList = (e) => {
    e.preventDefault();
    setListOfBurgers([...listOfBurgers, {text : burgerName, devour : false, id : Math.floor(Math.random() * 1000)}]) ;
    setBurgerName("");
  }
  return (
    <div div className="center">
      <button onClick={addToList} className="submitBtn" type="button"> Submit </button>
      <h6>Enter a burger you want to eat Click "submit" button</h6>
    </div>
  );
}

export default SubmitBtn;
