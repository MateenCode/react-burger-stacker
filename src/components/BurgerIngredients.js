import React from "react";

const BurgerIngredients = ({ burgerStack }) => {
  return (
    <>
      <div>Top of Burger</div>
      <div>--------------------</div>
      {burgerStack &&
        burgerStack.map((item, index) => <div key={index}>{item.name} </div>)}
      <div>--------------------</div>
      <div>Bottom of Burger</div>
    </>
  );
};

export default BurgerIngredients;
