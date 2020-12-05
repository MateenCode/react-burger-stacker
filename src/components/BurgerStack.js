import React, {useState} from "react";
// import Ingredient from "./Ingredient";

const BurgerStack = ({key, name}) => {
    return (
        <div className="stack">
            {name}
        </div>
    )
}

export default BurgerStack;

// notes: at first i had this return the Ingredient component which worked but it would also add the + button.
// it worked when done through BurgerPane so that BurgerStack only grabs the name of what is added.
// since the Ingredient component returns the ingredient name AND the button.