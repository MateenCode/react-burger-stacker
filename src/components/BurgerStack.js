import React, {useState} from "react";
import Ingredient from "./Ingredient";

const BurgerStack = ({burgerStack}) => {
    return (
        <div className="stack">
            {burgerStack.map(ingredient => (
                <Ingredient name={ingredient.name} />
            ))}
        </div>
    )
}

export default BurgerStack;