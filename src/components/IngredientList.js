import React from 'react';
import Ingredient from './Ingredient'

const IngredientList = (props) => {



    return (
        <div>
            <h3>Ingredient List</h3>
            {console.log(props.ingredients)}
            {props.ingredients.map(ingredient => {
                if (ingredient.isOnPane === false){
                    return <Ingredient key={ingredient.name} object={ingredient} ingredientList={props.ingredients} setter={props.setter}></Ingredient>
                }else{
                    console.log(ingredient.name)
                }
                console.log('--------')
            })}
            <hr></hr>
        </div>
    )
}

export default IngredientList;