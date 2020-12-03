import React from "react";


const BurgerStack = ({id, selectedIngredients, clearBurger}) => {
  return (
    <div>
        <div>
          <h2>Selected Toppings</h2>
        </div>
      <div key={id}>
          {selectedIngredients.map(ingredient => (
              <h3>{ingredient}</h3>
          ))}
      </div>
      <button onClick={clearBurger}>Clear Burger</button>
    </div>
    );
};

export default BurgerStack;