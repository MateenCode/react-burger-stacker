import React from 'react'

const BurgerStack = ({burger}) => {
    return (
        <div>
            {burger.map(ingredient => 
            <div>
                <div className={ingredient}></div>
                <p>{ingredient}</p>
            </div>
            )}
        </div>
    )
}

export default BurgerStack