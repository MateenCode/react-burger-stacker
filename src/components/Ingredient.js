import React, {useState} from 'react'


    const Ingredient = (props) => {
        console.log(props.items)
    return(
    //    <p> {props.name} {props.color} {props.itemIndex} </p>
    //    <button></button>
    <div>
        <ul>
            {props.items.map((newItem, index) =>(
                <li key={index} >
                    {newItem.name}
                    <button onClick= {(event)=>
                    {{props.addItem(event, newItem)}
                    }}>add</button>
                    
                </li>
            )

            )}
        </ul>
        
    </div>

       
    )
    
}

export default Ingredient
