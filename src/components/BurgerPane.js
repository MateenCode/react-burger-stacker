import React from "react";
import BurgerStack from './BurgerStack.js'

const BurgerPane = ({burgerStack, clearBurger}) => {

    return (
    <div className="pane">
        <h3>your burger</h3>

        <BurgerStack burgerStack={burgerStack} />

        {/* {burgerStack.map((ingredient, i)=>(
            // console.log("burgerStack from BurgerPane:", burgerStack)
            <li key={i}>
                {ingredient.name}
            </li>
        ))} */}

        <button onClick={clearBurger}>clear</button>
    </div>
    )
  };
  
  export default BurgerPane;