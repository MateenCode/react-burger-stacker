import React from 'react';
import Ingredients from './Ingredients';
// import BurgerPane from './components/BurgerPane'


const IngredientList = (props) =>{
    return (
        <div style={{border: '3px solid red', width:'30%'}}>
           <Ingredients items={props.items} addItem={props.addItem} />
​
       </div>
    )
}


export default IngredientList