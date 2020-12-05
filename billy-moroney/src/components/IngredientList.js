import React, { useState } from 'react'
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm'


const IngredientList = ({addIngredient}) => {

const [ingredients, setIngredients] = useState(['bun', 'cheese', 'meat'])

const newIngredient = (ingredient) => {
    setIngredients([ingredient, ...ingredients])
}

    return (
        <div>
        Ingredients
        {ingredients.map(ingredient => (
            <div class='ingredient'>
            <Ingredient name={ingredient} />
            <button class='add' onClick={() => addIngredient(ingredient)}>+</button>
            </div>
        )
        )}

        <IngredientForm newIngredient={newIngredient} />

        </div>
    )
}

export default IngredientList