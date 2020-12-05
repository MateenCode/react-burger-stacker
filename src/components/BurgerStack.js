import React from 'react';

const BurgerStack = ({stackedBurg}) => {
    // component where the stacking begins -- this takes from ingredients components
    return (
        <div>
            <ul>
                {/* mapping through the stacked burger list as well to make sure it's stored as another array on the right*/}
                {/* used in-line styling to make it easier... */}
                {stackedBurg.map((ingredient, index) => {
                return <li key={index} style={{backgroundColor: `${ingredient.color}`}}>{ingredient.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default BurgerStack;