import React, { useState } from 'react';


const Ingredient = (props) => {
    console.log(props.items)

    
return(
    <div id="ingredientList">
        <h1 style = {{textAlign: "center"}}>  Ingredient List: </h1>
            <ul id="ulIngredient">
                {props.items.map((newItem, index) =>(
                    <li id="liIngredient" key={index}> {newItem.name} 
                        <button id="add" onClick= {(event)=>{{props.addItem(event, newItem)}}}>add</button>
                    </li>
                )
                )}
            </ul>
        <button  id="deleteButton" onClick= {(event)=>{{props.removeIngredients(event)}}}>Delete Last Item Added</button>
    </div>
)
}



export default Ingredient