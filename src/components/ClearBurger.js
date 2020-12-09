import React from 'react';

const ClearBurger = (props) => {
    return (
        <button
            onClick={() => {
                props.clearBurger()
            }}
        >
            Throw it away!
        </button>
    );
};


export default ClearBurger
