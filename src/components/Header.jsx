import React from "react";
import bgpic from "../images/burger.jpg";

function Header() {
  return (
    <div className="App">
      <img src={bgpic} width="200" height="200" alt="burger"></img>
      <h3>Eat-Da-Burger</h3>
      <input type="text"></input><br/>
      <button className="submitBtn" type="button">Submit</button>
      <h6>Enter a burger you want to eat Click "submit" button</h6>
    </div>
  );
}

export default Header;
