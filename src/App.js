import React, {useState} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

// functional not class
const App = () => {

  const [ingredient, setIngredient] = useState([
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

  const [burgerStack, setBurgerStack] = useState([])

  const addIngredient = (addedIngredient) => {
    console.log("addedIngredients are:", addedIngredient)
    setBurgerStack([burgerStack,...burgerStack])
  }

  function clearStack(e) {
    setBurgerStack([])
  }

  return (
    <div className="App">
      <IngredientList ingredients={ingredient} addIngredient={addIngredient} />
      <BurgerPane burgerStack={burgerStack} clearBurger={clearStack} />
    </div>
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

