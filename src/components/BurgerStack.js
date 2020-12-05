import React from "react";
import BurgerIngredients from "./BurgerIngredients"


const BurgerStack = ({burgerStack}) => {

  return (
    <>
        <BurgerIngredients burgerStack={burgerStack} />
    </>
  )
};

export default BurgerStack;