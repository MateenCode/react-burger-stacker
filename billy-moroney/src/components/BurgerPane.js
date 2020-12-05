import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = ({burger, clearBurger}) => {
    return (
        <div class='burger-pane'>
            <BurgerStack burger={burger}/>
            <ClearBurger clearBurger={clearBurger}/>
        </div>
        
    )
}

export default BurgerPane