import React from 'react'

//components
import BurgerStack from './BurgerStack.js'

const BurgerPain = () => {
    return(
        <div>
            Build Your Burger:
            <BurgerStack />
            <button>Clear</button>
        </div>
    )
}

export default BurgerPain