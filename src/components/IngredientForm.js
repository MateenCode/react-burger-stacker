import React from 'react';


//when using a form to add to an existing array, always run the add function
//as a parameter inside the form function.
//also remmeber that the event handler 
const IngredientForm = ({addToIngredients}) => {


    //we dont need the code below because that is tracking when a text element is being changed, in this case, an array is being changed.
    // const handleChange = event => {
    //     addToIngredients(event.target.value)
    // }

    const handleSubmit = event => {
        event.preventDefault()
        addToIngredients({
            name: event.target[0].value,
            color: event.target[1].value,
        })
    }
        return(
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="ingredient"/>
                <input name="color" placeholder="color"/>
                <button onSubmit={handleSubmit}>Add Ingredient</button>
            </form>
        )
}



export default IngredientForm