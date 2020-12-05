import React, {useState, useEffect} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane"

// CSS imports
import "./css/App.css";

const App = () => {
  const [ingredient, setIngredient] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ])

  const [burgerStack, setBurgerStack] = useState([])

  const addIngredient = (event, chosenIngredient) => {
    event.preventDefault()
    setBurgerStack([chosenIngredient, ...burgerStack])
  }

  function clearBurger(e) {
    setBurgerStack([])
  }

  return (
    <div className="App">
      <h2>Make a Burger!</h2>
      <IngredientList addIngredient={addIngredient} ingredient={ingredient}/>
      <BurgerPane burgerStack={burgerStack} clearBurger={clearBurger}/>
    </div>
  );
};

export default App;
