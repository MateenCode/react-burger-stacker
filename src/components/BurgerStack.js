
import React from 'react';

const BurgerStack = (props) => {

    const divs = []

    for(let i = 0; i < props.object.isOnPane; i++){
        divs.push(<div style={{margin: "auto",height:"20px",width:"50%",background:props.object.color}}>
                
        </div>)
    }

    return(
        <div>
            {divs}
        </div>
       
    )
}

export default BurgerStack;