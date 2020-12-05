import React from 'react';
import Ingredients from './Ingredients'

function IngredientList(props) {
    // essentially the parent component for ingredients
    return(
        <div class="list">
            <Ingredients ingredients={props.ingredients} moveIngredient={props.moveIngredient}/>
        </div>
    )
}

export default IngredientList