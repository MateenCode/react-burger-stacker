import React from "react";

const IngredientList = ({ingredients, addIngredient}) => {

  return (
  <div>
    ingredient list here
    {ingredients.map((ingredient, i)=>{
      return <li key={i}>
        {ingredient.name} <button onClick={addIngredient}>+</button>
      </li>
    })}
    </div>
  )
};

export default IngredientList;