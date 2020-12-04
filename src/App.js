//import useState in this file to be able to use it in declaring states 
import React, {useState} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from './components/BurgerPane';

// CSS imports
import "./css/App.css";

const App = () => {
    //initializing a state using setState and passing in an array of ingredients 

  //MOVE STATES OVER TO APP.JS SO THAT THEY ARE AVAILABLE EVERYWHERE 
  const [options, setOptions] = useState([
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

  //initializing a state for the builtBurger and set it equal to an empty array
  const [builtBurger, setBuiltBurger] = useState([])

  const moveOption = (topping) => {
    //console.log('move option topping that was passed', topping)
    
    //use setBuiltBurger to add new option/topping to the builtBurger state and copying the previous array AFTER adding new topping
    setBuiltBurger([topping, ...builtBurger])
  }

  //function that clears the builtBurger array using the setBuiltBurger functionality 
  const clearBurger = () => {
    setBuiltBurger([])
  }

  return (
    <div className="App">
      <IngredientList options= {options} moveOption={moveOption}/>
      <BurgerPane builtBurger={builtBurger} clearBurger={clearBurger}/>
    </div>
  );
};

export default App;
