import React, { useState } from "react";
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const stuff = [
  { name: "Kaiser Bun", color: "saddlebrown",isOnPane:0 },
  { name: "Sesame Bun", color: "sandybrown",isOnPane:0 },
  { name: "Gluten Free Bun", color: "peru",isOnPane:0 },
  { name: "Lettuce Wrap", color: "olivedrab" ,isOnPane:0 },
  { name: "Beef Patty", color: "#3F250B", isOnPane:0 },
  { name: "Soy Patty", color: "#3F250B", isOnPane:0 },
  { name: "Black Bean Patty", color: "#3F250B", isOnPane:0 },
  { name: "Chicken Patty", color: "burlywood", isOnPane: 0},
  { name: "Lettuce", color: "lawngreen", isOnPane:0 },
  { name: "Tomato", color: "tomato" ,isOnPane: 0},
  { name: "Bacon", color: "maroon", isOnPane:0 },
  { name: "Onion", color: "lightyellow", isOnPane: 0},
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
    toEdit[index].isOnPane = toEdit[index].isOnPane += 1
    setFoodObject([...toEdit])
    console.log(foodObject)
  }

  const clearHandle = () => {
    let toEdit = foodObject;
    for(let i = 0; i < toEdit.length; i++){
      toEdit[i].isOnPane = 0
      console.log(toEdit[i])
    }
    setFoodObject([...toEdit])
  }


  return (
    <div>
      <IngredientList ingredients={(foodObject)} setter={putOnPane}></IngredientList>
      <BurgerPane ingredients={(foodObject)} setter={clearHandle}></BurgerPane>
    </div>
  )
};

export default FunctionalComponent;