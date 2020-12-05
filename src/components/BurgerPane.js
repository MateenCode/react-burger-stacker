import React, { Component } from "react";
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

const BurgerPane = (props) => {
    return(
        <div class="list-burgerlist">
            <h1>Here's your Burger 🍔:</h1>
            <BurgerStack chosenIngredients={props.chosenIngredients} />
            <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BurgerPane;