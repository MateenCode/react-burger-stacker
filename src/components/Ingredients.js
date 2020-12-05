import React from 'react';

function Ingredients(props) {
    // child component for ingredient list, maps all the ingredients from starter data and allows for users to choose a single ingredient similar to the todo list
    return(
        <div>
            <ul>
                {props.ingredients.map((newIngredient, index) => (
                    <li key={index}>
                        {newIngredient.name}
                        <button onClick={(e) => {props.moveIngredient(e, newIngredient)}} id="ingredient-btn"> > </button>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Ingredients