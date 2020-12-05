import React from 'react';
import Ingredient from './Ingredient'

const IngredientList = (props) => {



    return (
        <div>
            <h3>Ingredient List</h3>
            {console.log(props.ingredients)}
            {props.ingredients.map(ingredient => {
                return <Ingredient key={ingredient.name} object={ingredient} ingredientList={props.ingredients} setter={props.setter}></Ingredient>
            })}
            <hr></hr>
        </div>
    )
}

export default IngredientList;