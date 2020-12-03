import React, {useState} from "react";

//components
import Ingredient from './Ingredient.js'

const IngredientList = ({options, moveOption, builtBurger}) => {

  return (
    <div>
      Ingredient List: 
      {/* mapping through the options and calling the Ingredient component for each option in the array */}
      {options.map((option) => (
          <Ingredient name= {option.name} color= {option.color} moveOption= {moveOption} builtBurger={builtBurger}/>
        ))
      }

    </div>
  )
};

export default IngredientList;
