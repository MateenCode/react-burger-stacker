import React from "react";

const BurgerPane = ({burgerStack, clearBurger}) => {

    return (
    <div>
        burger stacking area

        {burgerStack.map((ingredient, i)=>(
            // console.log("burgerStack from BurgerPane:", burgerStack)
            <li key={i}>
                {ingredient.name}
            </li>
        ))}

        <button onClick={clearBurger}>clear</button>
    </div>
    )
  };
  
  export default BurgerPane;

  // everything works except the burger stack