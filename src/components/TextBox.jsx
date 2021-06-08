import React from 'react'

function TextBox({setBurgerName, burgerName}) {

    const insertBurgerName =(e) =>{
        setBurgerName(e.target.value)
    }
    return (
        <div div className="center">
            <input onChange = {insertBurgerName} type="text" value={burgerName}></input><br/>
        </div>
    )
}

export default TextBox
