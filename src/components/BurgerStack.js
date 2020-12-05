import React from 'react';

const BurgerStack = ({stackedBurg}) => {
    // component where the stacking begins -- this takes from ingredients components
    return (
        <div>
            <ul>
                {stackedBurg.map((ingredient, i) => {
                return <li key={i} style={{backgroundColor: `${ingredient.color}`}}>{ingredient.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default BurgerStack;