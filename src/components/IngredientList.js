import React from "react";

//components
import Ingredient from './Ingredient.js'

// CSS imports
import '../css/components/ClassComponents.css';

const IngredientList = ({options, moveOption, builtBurger}) => {

  return (
    <div className='list'>
      <h2>Ingredient List: </h2>
      {/* mapping through the options and calling the Ingredient component for each option in the array */}
      {options.map((option) => (
          <Ingredient name= {option.name} color= {option.color} moveOption= {moveOption} builtBurger={builtBurger}/>
        ))
      }

    </div>
  )
};

export default IngredientList;
