import React, {useState} from 'react'
import BurgerStack from "./BurgerStack"

const BurgerPane = ({burgerStack}) => {
  
  return <div className="BurgerPane">
  <div>this is burger pane that displays the burger stack and has a clear burger button</div>
    <BurgerStack burgerStack={burgerStack}/>
  </div>;
  };

export default BurgerPane;
