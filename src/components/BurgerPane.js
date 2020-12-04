import React, {useState} from 'react'
import BurgerStack from "./BurgerStack"

const BurgerPane = ({burgerStack, setBurgerStack}) => {

  const deleteBurger = event => {
    const currentItem = {
        name: event.target.value.split(",")[0], 
        color: event.target.value.split(",")[1]
    }
    setBurgerStack([currentItem, ...burgerStack])
}
  return <div className="BurgerPane">
  <div>this is burger pane that displays the burger stack and has a clear burger button</div>
    <BurgerStack burgerStack={burgerStack}/>
    <button onClick={burgerStack}>Clear</button>
  </div>;
  };

export default BurgerPane;
