import React, { useState } from 'react';


const BurgerStack = (props) =>{



    return(
        <div id="burger">
        <h1 style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy"}}>  </h1>
            <ul style= {{ textDecoration:"none"}}> 
                {props.burger.map((item, index)=>{
                    return(
                        <li key={index} style= {{ color:"transparent", backgroundImage: "url(" + `${item.image}` + ")",  backgroundPosition: 'center', backgroundSize: `${item.width}`, backgroundRepeat: 'no-repeat', borderRadius: `${item.style}`, height: `${item.height}`}}>
                            
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