import React, { useState } from 'react';


const BurgerStack = (props) =>{



    return(
        <ul> 
            {props.burger.map((burgerStuff, index)=>{
                console.log(burgerStuff)
                return(
                    <li key={index} name={burgerStuff.name}> </li>
                )
            })}
        </ul>
    )
}




export default BurgerStack