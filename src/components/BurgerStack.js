import React, { useState } from 'react';


const BurgerStack = (props) =>{



    return(
        <div id="burger">
        <h1 style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy"}}>  </h1>
            <ul id="ulBurger" style= {{ textDecoration:"none"}}> 
                {props.burger.map((item, index)=>{
                    return(
                        <li id="liBurger" key={index} style= {{ color:"transparent", backgroundImage: "url(" + `${item.image}` + ")",  backgroundPosition: 'center', backgroundSize: `${item.width}`, backgroundRepeat: 'no-repeat', borderRadius: `${item.style}`, height: `${item.height}`}}>
                            
                        </li>
                    )
                }
                )}
            </ul>
            <button id="clearBurger" onClick= {(event)=>{{props.clearBurger(event)}}}>CLEAR BURGER </button>
        </div>
    )
}




export default BurgerStack