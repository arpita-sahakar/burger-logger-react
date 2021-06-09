import React from 'react'

function DisplayCompList({complete}) {
    return (
        <div className="displayList right">
            {complete.map(el=>{
                return <h3>{el.text}</h3>
            })}
        </div>
    )
}

export default DisplayCompList
