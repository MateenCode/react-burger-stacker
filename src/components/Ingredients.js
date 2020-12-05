import React from 'react';

function Ingredients(props) {
    // child component for ingredient list, maps all the ingredients from starter data and allows for users to choose a single ingredient similar to the todo list
    return(
        <div class="ingredients">
            <ul>
                {props.ingredients.map((newIngredient, i) => (
                <li key={i}>
                        {newIngredient.name}
                        <button onClick={(e) => {props.moveIngredient(e, newIngredient)}}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredients