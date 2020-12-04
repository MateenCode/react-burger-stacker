import React, {useState} from 'react'
import BurgerStack from './BurgerStack'


const BurgerPane = (props) => {

    return(
         <div style={{ border: '3px solid green', float:"right", width:'300px', height:"500px", marginTop:'-500px'}}>
        
            <BurgerStack selectedIngredients={props.selectedIngredients}
            clearselectedIngredients ={props.clearselectedIngredients } />
            </div>
       
    )
}



    export default BurgerPane