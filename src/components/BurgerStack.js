import React, {useState} from "react";
import Ingredient from "./Ingredient";

const BurgerStack = ({burgerStack}) => {
    return (
        <div className="stack">
            {burgerStack.map(addedIngredient => (
                <Ingredient name={addedIngredient.name} />
            ))}
        </div>
    )
}

export default BurgerStack;