import React from 'react';



const Ingredient = (props) => {

    const handleButtonClick = (e) => {
        const foundIndex = props.ingredientList.findIndex(element => element.name === props.object.name)
        // props.ingredientsList.splice(foundIndex,1)
        // props.ingredientList.push(currentObj)
        props.setter(foundIndex)
        console.log(props.ingredientList)
    }



    return (
        <div>
            <p>The ingredient: {props.object.name}</p>
            <button onClick={handleButtonClick}>Here</button>
        </div>
    )
}

export default Ingredient;