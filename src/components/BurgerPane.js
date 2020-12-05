import React, { useState } from 'react'
import BurgerStack from "./BurgerStack"

const BurgerPane = ({ burgerStack, setBurgerStack }) => {

  const deleteBurger = event => {
    const currentItem = {
      name: event.target.value.split(",")[0],
      color: event.target.value.split(",")[1]
    }
    setBurgerStack([])
  }
  return <div className="burgerStack">
    <div >
      {/* this is burger pane that displays the burger stack and has a delete burger button */}
      <BurgerStack burgerStack={burgerStack} />
    </div>
    <button className="clearButton" onClick={deleteBurger}>Clear</button>

  </div>
}
export default BurgerPane;
