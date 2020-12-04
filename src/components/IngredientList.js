import React, { useState } from 'react'
import shortid from 'shortid'
import BurgerStack from './BurgerStack'

//component


const IngredientList = ({ ingredient, setBurgerStack, burgerStack }) => {
    //set ingredient list 

    //    debugger

    const sendIngredient = event => {
        const currentItem = {
            name: event.target.value.split(",")[0], 
            color: event.target.value.split(",")[1]
        }
        setBurgerStack([currentItem, ...burgerStack])
    }
    
    return (
        <div className="IngredientList" >
            <div>This component displays the list of ingredients from the Ingredients component</div>

            {ingredient.map(item => {
                const background = item.color
                return (
                    <div className="specificIngredient"
                        style={{ "background-color": background }}>
                        <p key={item.name}>{item.name}</p>
                        {/* button needs to send ingredient to burger stack */}
                        <button value={`${item.name}, ${item.color}`} onClick={sendIngredient}>></button>
                    </div>
                )
            })}

        </div>
    )
}

export default IngredientList;