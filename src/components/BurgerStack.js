import React, { useState } from 'react';


const BurgerStack = (props) =>{



    return(
        <div>
        <h1 style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy"}}> Stack a Burger: </h1>
            <ul> 
                {props.burger.map((item, index)=>{
                    return(
                        <li key={index} style= {{ backgroundColor: `${item.color}` }}>
                            {item.name} 
                        </li>
                    )
                }
                )}
            </ul>
            <button onClick= {(event)=>{{props.clearBurger(event)}}}>CLEAR BURGER</button>
            
        </div>
    )
}




export default BurgerStack