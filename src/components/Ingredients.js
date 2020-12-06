import React , {useState}from 'react'

import '../css/components/Ingredients.css'

const Ingredients = ({sendData}) =>{
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
  ]) 

  const selectIngredient = (event) =>{
    sendData(event.target.previousSibling.innerText)
   
  }

 

return (
    <div className='ingredientsContainer'>
       {ingredients.map( ingredient  =>(
           <> 
              <p>{ingredient.name}</p>
              <button className ="button1" onClick={selectIngredient}> > </button>
              <br />
           </>
       ))} 
       
    </div>
)





}









export default Ingredients