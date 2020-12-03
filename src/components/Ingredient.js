import React from 'react'

const Ingredient = ({name, color}) => {
    return (
        <div className="ings">
            <div style={{color: color, display: "inline"}}>{name}</div>
            <button className="add-btn">></button>
        </div>
    )
}

export default Ingredient