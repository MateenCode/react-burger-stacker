import React from 'react'

import '../css/components/StackingArea.css'


const StackingArea = ({ingredients}) =>{

 const clear = (e) =>{
   e.splice(0,e.length)
   document.querySelectorAll('.ingredient').forEach(ingredient=>{
       ingredient.innerText = ''
   })
}
    
    return(
        <div className='stackingArea'>
             {ingredients.map(ingredient=>(
                 
                     <div className='ingredient'>{ingredient}</div>
                 
             ))}
            
            <div className="plate" >----------</div>
            <p>Burger Stacking Area</p>
            <button onClick={()=>{clear(ingredients)}}className="clear"> Clear</button>
        </div>


    )
}






export default StackingArea