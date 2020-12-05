import React, { useState } from 'react';
// import BurgerPane from './components/BurgerPane'
import Ingredient from './Ingredient'



const IngredientList = (props) =>{
    return (
        <div style={{border: '4px double red', width:'30%'}}>
           {/* {props.name} {props.color} {props.itemIndex} <button>Add</button> */}
           <Ingredient items={props.items} addItem={props.addItem} removeIngredients={props.removeIngredients}/>
​
       </div>
    )}


  
  





export default IngredientList