import React, { useState } from 'react';
import BurgerStack from './BurgerStack'


const BurgerPane = (props) => { 

return(
        <div> 
                <BurgerStack burger={props.burger} clearBurger={props.clearBurger}  />  
       </div>
)
}


export default BurgerPane