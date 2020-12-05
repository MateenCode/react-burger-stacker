import React from 'react'

//components


const BurgerStack = ({burgerStack}) => {

    return <div>
        {/* this is burger stack that is going to show the stack of ingredients */}
        {burgerStack.map(item => {
            const background = item.color
            console.log(item.name)
            return (
                <div className="specificIngredient"
                    style={{ backgroundColor: background }}>
                    <p key={item.name}>{item.name}</p>
                </div>)
            }
        )}
        
    </div>
};

export default BurgerStack;
