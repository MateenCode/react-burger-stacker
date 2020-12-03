import React from 'react'

//components
import Ingredient from './Ingredient.js'


const BurgerStack = () => {
    return(
        <div>
            Ingredient options go here
            {/* going to have to map through the array of builtBurger and print render them in order */}
            <Ingredient />
        </div>
    )
}

export default BurgerStack