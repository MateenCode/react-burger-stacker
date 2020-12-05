import React, {useState} from "react";
import "./css/App.css";
import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";

function App() {
  // helps make this "global" or accessible throughout the components
  // use State gives us reference to state by the first parameter in the array 
  const [ingredients, setIngredients] = useState([
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
  ]);

  const [stackedBurg, setStackedBurg] = useState([]);

  let moveIngredient = (e, ingredients) => {
    e.preventDefault();
    setStackedBurg([ingredients, ...stackedBurg]);
  };

  let clearBurger = () => {
    setStackedBurg([]);
  };
  // make sure ingredientlist is on the left and burgerpane is on the right
  return (
    <div className="burger-body">
      <div className="ingredients">
        <IngredientList
          ingredients={ingredients}
          moveIngredient={moveIngredient}
        />
      </div>

      <div className="burger-stack">
        <BurgerPane
          stackedBurg={stackedBurg}
          clearBurger={clearBurger}
        />
      </div>
    </div>
  );
}

export default App;