import React, { useState } from 'react';


const Ingredient = (props) =>{

    

    return(
        <p> {props.name} {props.itemIndex} </p> 
    )
}




//DECONSTRUCTIVE WAY
// const Ingredient = ({item}) =>{
//     return(
//         {item.name}
//     )
// }

export default Ingredient