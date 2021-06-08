import React from "react";
import Devor from "./Devor.jsx";

function DisplayList({ listOfBurgers , setListOfBurgers}) {
  return (
    <div className="displayList">
      {listOfBurgers.map((burger) => {
        return <Devor listOfBurgers={listOfBurgers} burger={burger} setListOfBurgers={setListOfBurgers}/>;
      })}
    </div>
  );
}

export default DisplayList;
