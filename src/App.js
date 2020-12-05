import React, { useState } from "react";
// Components imports
import BurgerPane from "./components/BurgerPane"
import IngredientList from "./components/IngredientList"
// CSS imports
import "./css/App.css";

/*
App structure:

A global 'burger ingredients' state (context?)
maybe hard code into App for now

are the Ingredient components really the same given that I have a button in one and will need some different content/styling in the other?
i guess i could pass some sort of argument?

make ingredient component simpler so that it is reusable, add in the button in ingredient list

*/

const App = () => {

  const [burger, setBurger] = useState([])

  const addIngredient = (ingredient) => {
    console.log(ingredient)
    setBurger([ingredient, ...burger])
  }

  

  const clearBurger = () => {
    setBurger([])
  }

  return (
    <div className="App">
      <div id='ingredients'><IngredientList addIngredient={addIngredient}/></div>
      <div id='burger'><BurgerPane burger={burger} clearBurger={clearBurger} /></div>
    </div>
  );
};

export default App;
