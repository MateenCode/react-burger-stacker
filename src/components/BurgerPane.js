import React from "react";
import BurgerStack from './BurgerStack';

const BurgerPane = (props) => {
    // this component brings it all together and allows user to clear their burgers
    // will update to move away from props
    return(
        <div class="list burgerlist">
            <BurgerStack stackedBurg={props.stackedBurg} />
            <button onClick={props.clearBurger}>Clear</button>
        </div>
    )
}

export default BurgerPane;