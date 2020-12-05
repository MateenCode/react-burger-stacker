import React, {useState} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

// functional not class
const App = () => {

  // array of objects for ingredients
  const [ingredients, setIngredient] = useState([
    { name: "kaiser bun", color: "saddlebrown" },
    { name: "sesame bun", color: "sandybrown" },
    { name: "gluten free bun", color: "peru" },
    { name: "lettuce wrap", color: "olivedrab" },
    { name: "beef patty", color: "#3F250B" },
    { name: "soy patty", color: "#3F250B" },
    { name: "black bean patty", color: "#3F250B" },
    { name: "chicken patty", color: "burlywood" },
    { name: "lettuce", color: "lawngreen" },
    { name: "tomato", color: "tomato" },
    { name: "bacon", color: "maroon" },
    { name: "onion", color: "lightyellow" }
  ])
  
  // initialize state
  const [burgerStack, setBurgerStack] = useState([])

  const addToStack = (addedIngredient) => {
    setBurgerStack([addedIngredient, ...burgerStack])
    // console.log("burgerStack is:", burgerStack)
  }

  const clearStack = () => {
    setBurgerStack([])
  }
  
  return (
    <>
      <h1>welcome to good burger</h1>
      <div className="App">
        <IngredientList ingredients={ingredients} addToStack={addToStack} burgerStack={burgerStack} />
        <BurgerPane burgerStack={burgerStack} clearBurger={clearStack} />
      </div>
    </>
  );
};

export default App;

/*

component hierarchy

App
  IngredientList
    Ingredient(s)

  BurgerPane
    BurgerStack
      Ingredient(s)

    ClearBurger

*/

