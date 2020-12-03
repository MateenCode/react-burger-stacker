import React from 'react'

//components
import BurgerStack from './BurgerStack.js'

const BurgerPain = ({builtBurger, clearBurger}) => {
    return(
        <div>
            Build Your Burger:
            <BurgerStack builtBurger={builtBurger}/>
            <button onClick={clearBurger}>Clear</button>
        </div>
    )
}

export default BurgerPain