import React, {useState} from "react";
import Ingredient from './Ingredient.js'

const IngredientList = ({ingredients, addToStack, burgerStack}) => {

  return (
    <div className="ingredients">
      <h3>ingredients bar</h3>
      {ingredients.map((ingredient, i) => (
        <Ingredient name={ingredient.name} addToStack={addToStack} burgerStack={burgerStack} />
      )
      )}
    </div>
  )
}

export default IngredientList;