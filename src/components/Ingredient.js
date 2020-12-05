import React, { useState } from 'react';


const Ingredient = (props) => {
    console.log(props.items)
return(
<div style = {{backgroundImage: "url(" + "https://www.nuggetmarket.com/media/images/09/11/suspended-burger-square.jpg" + ")",  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
<h1 style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy"}}>  Ingredient List: </h1>
    <ul>
        {props.items.map((newItem, index) =>(
            <li key={index}> {newItem.name} 
                <button onClick= {(event)=>{{props.addItem(event, newItem)}}}>add</button>
                
            </li>
        )
        )}
    </ul>
    <button onClick= {(event)=>{{props.removeIngredients(event)}}}>Delete Last Item Added</button>
</div>
)
}



export default Ingredient