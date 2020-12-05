import React, {useState} from "react";
import shortid from 'shortid'

const IngredientList = ({ingredients, addIngredient}) => {
  const [name, setName] = useState('')
​
  // function to set the name of the ingredient added to burger as the name of selected ingredient
  // const updateIngredient = event => {
  //   // event.preventDefault()
  //   setName(event.target.value)
  // }
​
  // function to add the selected ingredient to the burger stack
  const addToStack = event => {
    event.preventDefault()
    setName(event.target.value)
    console.log("console log of event.target.value:", event)
    addIngredient({
      id: shortid.generate(),
      name: name
    })
  }
​
  return (
​
  <div>
    ingredient list here
    {ingredients.map((ingredient, i)=>{
      // console.log("ingredient.name:", ingredient.name)
      return (
      <form onSubmit={addToStack}>
          {ingredient.name}
          <input name="name" value={ingredient.name} />
          <button onSubmit={addToStack}>+</button>
      </form>
      )
      })}
  </div>
  )
};
​
export default IngredientList;


      // <li key={i}>
      //   {ingredient.name} <button onClick={addIngredient}>+</button>
      // </li>