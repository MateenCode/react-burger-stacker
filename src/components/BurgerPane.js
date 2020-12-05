import React from 'react';
import BurgerStack from './BurgerStack';

const BurgerPane = (props) => {


   

    return(
        <div>
            <h3>Burger Pane</h3>
            {props.ingredients.map(ingredient => {
                if (ingredient.isOnPane > 0){
                    return <BurgerStack key={ingredient.name} object={ingredient} ingredientList={props.ingredients} ></BurgerStack>
                }else{
                    console.log(ingredient.name)
                }
            })}
            <button onClick={props.setter}>Clear</button>
        </div>
    )
}

export default BurgerPane;