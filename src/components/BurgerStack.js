import React from 'react'

//components
import Ingredient from './Ingredient.js'


const BurgerStack = ({builtBurger}) => {
    return(
        <div>
            {/* going to have to map through the array of builtBurger and print render them in order */}
            {builtBurger.map(topping => (
                <Ingredient name={topping.name} color={topping.color}/>
            ))
            }
            {console.log('this is builtBurger', builtBurger)}
        </div>
    )
}

export default BurgerStack