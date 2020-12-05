import React from "react";
import BurgerStack from './BurgerStack';

const BurgerPane = (props) => {
    // this component brings it all together and allows user to clear their burgers
    // will update to move away from props
    return(
        <div>
            <BurgerStack stackedBurg={props.stackedBurg} />
            {/* pass onClick btn as an anon function to ensure it only clears when clicked */}
            <button onClick={props.clearBurger} id="clear-btn">Clear</button>
        </div>
    )
}

export default BurgerPane;