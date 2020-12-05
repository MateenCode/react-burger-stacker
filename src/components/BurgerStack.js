import React, {useState} from "react";
import BurgerPane from "./BurgerPane";

const BurgerStack = () => {

    // const [stack, setStack] = useState([])

    // const addIngredient = (ingredient) => {
    //     setStack([ingredients, ...ingredients])
    // }

    // const clearStack = () => {
    //     setStack([])
    // }

    return (
    <div>
        burger stack has the following ingredients added:
        <BurgerPane />
    </div>
    )
  };
  
  export default BurgerStack;