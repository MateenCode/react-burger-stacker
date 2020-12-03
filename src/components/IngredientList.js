import React from "react";
import Ingredients from "./components/Ingredients";
import BurgerPane from "./components/BurgerPane"


const IngredientList = () => {
 const [ingredients, setIngredients] = useState([])
  return (
  <div >
  <div>This component displays the list of ingredients from the Ingredients component</div>
</div>
  )
}

export default IngredientList;