import React from "react";
import BurgerStack from './BurgerStack';

const BurgerPane = (props) => {
    return(
        <div class="list burgerlist">
            <BurgerStack stackedBurg={props.stackedBurg} />
            <button onClick={props.clearBurger}>Clear</button>
        </div>
    )
}

export default BurgerPane;