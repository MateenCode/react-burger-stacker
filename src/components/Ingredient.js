import React from 'react'

// CSS imports
import '../css/components/ClassComponents.css';

//this Ingredient component grabs name and color props and displays/uses it
const Ingredient = ({name, color, moveOption, status}) => {

    let textColor= 'black';
    if(color == '#3F250B' || color == 'maroon'){
        textColor= 'rgba(241, 235, 214)'
    }

    const style= {
        background: color,
        color: textColor,
        width: '50%'
    }

    return(
        <div className='item'>
            <div style={style}>{name}</div>
            {/* when button is click, run a function that will add it to the new array of builtBurger */}
            
            {/* inline styling will check the status, which is only passed for the built burger call to Ingredient component, and wont display the button if status is truthy */}
            <button onClick= {e => moveOption({name, color})} style={{display: status ? 'none' : ''}} >→</button> {/*note: could not be written as onClick= {moveOption({name, color} and I dont know why)} */}
        </div>
    )
}

export default Ingredient;

