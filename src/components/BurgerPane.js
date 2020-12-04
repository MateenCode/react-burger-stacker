import React, { useState } from 'react';
import BurgerStack from './BurgerStack'




const BurgerPane = (props) => { 

return(
        <div style={{border: '3px solid blue', width:'30%', marginLeft:'500px'}}> 
{/* 
       {props.name} {props.itemIndex}  */}
       <BurgerStack burger={props.burger}/>  
    </div>
)

}



export default BurgerPane