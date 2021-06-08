import React from "react";
import bgpic from "../images/burger.jpg";

function Header() {
  return (
    <div className="center">
      <img src={bgpic} width="200" height="200" alt="burger"></img>
      <h3>Eat-Da-Burger</h3>
    </div>
  );
}

export default Header;
