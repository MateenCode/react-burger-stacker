import React, { useState } from "react";
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const stuff = [
  { name: "Kaiser Bun", color: "saddlebrown",isOnPane: true },
  { name: "Sesame Bun", color: "sandybrown",isOnPane: false },
  { name: "Gluten Free Bun", color: "peru",isOnPane: false },
  { name: "Lettuce Wrap", color: "olivedrab" ,isOnPane: false },
  { name: "Beef Patty", color: "#3F250B", isOnPane: false },
  { name: "Soy Patty", color: "#3F250B", isOnPane: false },
  { name: "Black Bean Patty", color: "#3F250B", isOnPane: false },
  { name: "Chicken Patty", color: "burlywood", isOnPane: false },
  { name: "Lettuce", color: "lawngreen", isOnPane: false },
  { name: "Tomato", color: "tomato" ,isOnPane: false },
  { name: "Bacon", color: "maroon", isOnPane: false },
  { name: "Onion", color: "lightyellow", isOnPane: false },
];

const FunctionalComponent = () => {
  const [foodObject, setFoodObject] = useState(stuff)

// const filterIngredientList = () => {
//     let filterIngredientList =  foodObject.filter(ingredient => {return ingredient.isOnPane === false})
//     return filterIngredientList
//   }

// const filterBurgerPane = () => {

//   let filterIngredientList =  foodObject.filter(ingredient => {return ingredient.isOnPane === true})
//   return filterIngredientList
// }

  const putOnPane = (index) => {
    let toEdit = foodObject;
    toEdit[index].isOnPane = true
    setFoodObject(toEdit)
    console.log(foodObject)
  }


  return (
    <div>
      <IngredientList ingredients={(foodObject)} setter={putOnPane}></IngredientList>
      <BurgerPane ingredients={(foodObject)}></BurgerPane>
    </div>
  )
};

export default FunctionalComponent;