import React, {useState} from 'react'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

const ingredients = [
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
];
// this component sends the ingredients to the IngredientList  and BurgerStack components
const Ingredients = () => {
//    const [ingredients, setIngredients]= useState(ingredients)
    return (
        <div >
            
            <IngredientList ingredient={ingredients} />
        </div>
    )
}

export default Ingredients;