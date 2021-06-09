import React from "react";
import Devor from "./Devor.jsx";

function DisplayInCompleteList({ incomplete , setListOfBurgers, listOfBurgers}) {
  return (
    <div className="displayList left">
      {incomplete.map((burger) => {
        return <Devor listOfBurgers = {listOfBurgers} incomplete={incomplete} burger={burger} setListOfBurgers={setListOfBurgers}/>;
      })}
    </div>
  );
}

export default DisplayInCompleteList;
