import React from "react";

function Devor({incomplete, burger, setListOfBurgers, listOfBurgers}) {

    const devorIt =()=>{
        setListOfBurgers(listOfBurgers.map(el=>{
            if(el.id === burger.id){
                return {...el, devour:true}
            }else {
                return el
            }
        }))
    }

  return (
    <div>
      <div>
        <h3>{burger.text}</h3>
        <button onClick={devorIt} type="button">Devor</button>
      </div>
    </div>
  );
}

export default Devor;
