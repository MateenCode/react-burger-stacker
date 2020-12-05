import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients"

const IngredientList = ({ingredient, addIngredient}) => {
  
console.log('addIngredientFunction', addIngredient)
  return (
  <>
  <Ingredients ingredient={ingredient} addIngredient={addIngredient}/>
  </>
  )
};

export default IngredientList;