import React, {useState} from "react"
// Components imports
import Ingredient from "./components/Ingredient"
import BurgerStack from "./components/BurgerStack"
import CustomTopping from "./components/CustomTopping"
// CSS imports
import "./css/App.css";

const App = () => {
  const [ingredients, setIngredient] = useState(
  [{ id: 1, name: "Kaiser Bun", color: "saddlebrown" },
  { id: 2,name: "Sesame Bun", color: "sandybrown" },
  { id: 3, name: "Gluten Free Bun", color: "peru" },
  { id: 4, name: "Lettuce Wrap", color: "olivedrab" },
  { id: 5, name: "Beef Patty", color: "#3F250B" },
  { id: 6, name: "Soy Patty", color: "#3F250B" },
  { id: 7, name: "Black Bean Patty", color: "#3F250B" },
  { id: 8, name: "Chicken Patty", color: "burlywood" },
  { id: 9, name: "Lettuce", color: "lawngreen" },
  { id: 10, name: "Tomato", color: "tomato" },
  { id: 11, name: "Bacon", color: "maroon" },
  { id: 12, name: "Onion", color: "lightyellow" }]
  )

  const [selectedIngredients, setSelectedIngredients] = useState([])

  //add selected ingredient
  const selectedTopping = (name) => {
    console.log(selectedIngredients)
    setSelectedIngredients([name,...selectedIngredients])
  }

  //clear selected ingredients array
  const clearBurger = () => {
    setSelectedIngredients([])
  }

  //function to pass to add custom topping form
  const addCustomTopping = (ingredient) => {
    setIngredient([...ingredients, ingredient])
  }

  //function to allow user to undo last ingredient added to burger
  const undoLastIngredient = (selectedIngredient) => {
    console.log(selectedIngredients)
    let arrayLength = selectedIngredients.length-1
    console.log(selectedIngredients[arrayLength])
    
    setSelectedIngredients(selectedIngredients.filter((selectedIngredient) => selectedIngredient === selectedIngredients[arrayLength]))
    
  }

  return (
    <div className="App">
      <h1>Welcome to Burger World!</h1>
      <h4>Select your bun, burger, and toppings to build your burger</h4>
      <div className="menu">
        <h2>Ingredients</h2>
        {ingredients.map(ingredient => (
          <Ingredient 
            key={ingredient.id}
            name={ingredient.name}
            selectedTopping={() => selectedTopping(ingredient.name)}
            color={ingredient.color}
        />
        
      ))}
      <CustomTopping 
        addCustomTopping={addCustomTopping}
      />
    </div>
    <div className="menu">
      <BurgerStack 
        selectedIngredients = {selectedIngredients}
        clearBurger = {() => clearBurger()}
        key = {Math.floor(Math.random()*selectedIngredients.length)}
        undoLastIngredient = {() => undoLastIngredient()}
      />
    </div>
    </div>
  );
};

export default App;
