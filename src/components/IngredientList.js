import React, { useState } from 'react';
// import BurgerPane from './components/BurgerPane'
import Ingredient from './Ingredient'






const IngredientList = (props) =>{
    return (
        <div style={{border: '3px solid red', width:'30%'}}>
           {/* {props.name} {props.color} {props.itemIndex} <button>Add</button> */}
           <Ingredient items={props.items} addItem={props.addItem} />
​
       </div>
    )}




export default IngredientList