import React, { useState } from 'react';
import BurgerPane from './components/BurgerPane'
// import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'
import ClearBurger from './components/ClearBurger'
import './css/App.css'

//we want to render the ingredients as soon as the user loads the page, thats why the array is inside app.js. which is the parent. 
const App = () => {

    const [items, setItems] = useState([ 
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

    const [selectedIngredients, setselectedIngredients] = useState([])
      
    const addItem = (event, items) => {
      event.preventDefault()
      console.log(selectedIngredients)
      console.log(items)
      setselectedIngredients([items,...selectedIngredients])
    }

    const deleteItem= (event,id)=>{
      event.preventDefault ()

      setselectedIngredients(items.filter((deletedItem)=> deletedItem.id !== id))

    }

  return (
    <div>
      <div>
      <IngredientList   addItem={addItem} items={items}/>  
      </div>
      <div>
        <BurgerPane selectedIngredients={selectedIngredients} />
        <ClearBurger deleteItem={deleteItem}/>
      </div>
    </div>
    )
  }

export default App