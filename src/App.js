import React, {useState} from "react";
// Components imports

import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";
import Ingredients from "./components/Ingredients"
// CSS imports
import "./css/App.css";

const ingredient = [
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
];

const App = () => {
// const [ingredient, setIngredient] = useState()
const [burgerStack, setBurgerStack] = useState([])
  return (
    <div className="App">
      <div className="ingredientList">
      <IngredientList ingredient={ingredient} setBurgerStack={setBurgerStack} burgerStack={burgerStack}/>
      </div>
      <div className="burgerPane">
      <BurgerPane burgerStack={burgerStack} setBurgerStack={setBurgerStack}/>
      </div>
    </div>
  );
};

export default App;
