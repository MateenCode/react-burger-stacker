import React from "react";


const BurgerStack = ({id, selectedIngredients, clearBurger, undoLastIngredient}) => {
  return (
    <div>
      <div>
          <h2>Selected Toppings</h2>
      </div>
      {/*iterate through array to print name of each ingredient in its own div */}
      <div key={id}>
          {selectedIngredients.map(ingredient => (
              <div>
                <div>
                  <h3>{ingredient}</h3>
                </div>
                <button onClick={undoLastIngredient}>Remove Ingredient</button>
              </div>
          ))}
          
      </div>
      {/* add button to clear burger stack to allow user to start building burger from scratch */}
      <button onClick={clearBurger}>Clear Burger</button>
    </div>
    );
};

export default BurgerStack;