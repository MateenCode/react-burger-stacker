import React from 'react'

// similar to Todo.js in the react lecture in class -- takes the ingredient elements and returns here

const Ingredient = ({name, addToStack, burgerStack}) => {
    return (
        <div className="adds">
            {name} <button onClick={() => addToStack({name})}>+</button>
        </div>
    )
}

export default Ingredient;