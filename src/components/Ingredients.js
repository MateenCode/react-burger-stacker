import React from 'react'


const Ingredients = (props) => {
    console.log(props.items)
    return(
    <div>
        <ul>
            {props.items.map((newItem, index) =>(
                <li key={index} >
                    {newItem.name}
                    <button onClick= {(event)=>
                    {
                        {props.addItem(event, newItem)}
                    }}>add</button>
                    
                </li>
            )

            )}
        </ul> 

    </div>  
    )
}


export default Ingredients 