import React, { useState } from 'react';

const ClearBurger = ({clearBurger}) => {
    return (
        <div>
            <button
                onClick={e => {
                    clearBurger(e)
                }}
                >Start Over
            </button>
            
        </div>
    )
    
}

export default ClearBurger;