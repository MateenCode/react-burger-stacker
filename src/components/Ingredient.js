import React from 'react'

//this Ingredient component grabs name and color props and displays/uses it
const Ingredient = ({name, color, moveOption}) => {
    return(
        <div>
            <div style={{color: {color}}}>{name}</div>
            {/* when button is click, run a function that will add it to the new array of builtBurger */}
            {/* <button onClick= {e => moveOption(e)} value={name}>→</button> */}
        </div>
    )
}

export default Ingredient;

