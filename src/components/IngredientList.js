import React, {useState} from "react";

//import Components
import Ingredient from "./Ingredient"

const IngredientList = () => {

  // setting up initial state
  const [ingredients, setIngredients] = useState(
    [
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
      { name: "Onion", color: "darkgoldenrod" },
    ]
  )

  const [burgerIngredients, setBurgerIngredients] = useState([])

  return (
    <div>
      {ingredients.map((ingredient, i) => (
        //mapping through the array of ingredients in the state
        <Ingredient key={i} 
          name={ingredient.name} 
          color={ingredient.color}
          />
      ))}
    </div>
  )
};

export default IngredientList;
