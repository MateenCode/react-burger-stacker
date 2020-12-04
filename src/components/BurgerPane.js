import React from 'react'

//components
import BurgerStack from './BurgerStack.js'

const BurgerPain = ({builtBurger, clearBurger}) => {
    return(
        <div className='list'>
            <h2>Build Your Burger:</h2>
            <BurgerStack builtBurger={builtBurger}/>
            <button onClick={clearBurger} id='clear'>Clear</button>
        </div>
    )
}

export default BurgerPain