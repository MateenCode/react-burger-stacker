import React  from 'react'

const BurgerStack= (props) => {
    return (
        <div>
            <ul>
                {/* //each item an index */}
                {props.selectedIngredients.map((item, index)=>
                {
                    return(
                        <li key={index} style= {{ backgroundColor: `${item.color}` }}>
                        {item.name}
                
                           
                        </li>

                    )
                }
                )}
            </ul>
            <button onClick= {(event)=>{{props.clearselectedIngredients (event)}}}>Clear</button>
        </div>
    )
}


export default BurgerStack