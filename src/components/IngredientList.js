import React, { useState } from 'react'
import shortid from 'shortid'
import BurgerStack from './BurgerStack'

//component


const IngredientList = ({ ingredient, setBurgerStack, burgerStack }) => {

    const sendIngredient = event => {
        const currentItem = {
            name: event.target.value.split(",")[0],
            color: event.target.value.split(",")[1]
        }
        setBurgerStack([currentItem, ...burgerStack])
    }

    return (
        <div className="specificIngredient">
            {/* <div>This component displays the list of ingredients from the Ingredients component</div> */}

            {ingredient.map(item => {
                const background = item.color
                return (
                    <div 
                        style={{ backgroundColor: background }}>
                        <p key={item.name}>
                            {item.name}
                <button className="ingredientButton" value={`${item.name}, ${item.color}`} onClick={sendIngredient}>></button>
                        </p>
                        {/* button needs to send ingredient to burger stack */}

                    </div>
                )
            })}

        </div>
    )
}

export default IngredientList;