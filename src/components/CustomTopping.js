import React, { useState } from "react"

const CustomToppingForm = ({addCustomTopping}) => {
    //set state for form
    const [topping, setTopping] = useState('')
    //handle change function to capture input
    const handleChange = event => {
        console.log(event.target.value)
        setTopping(event.target.value)
    }
    //handle form submission to add topping to Ingredient
    const handleSubmit = event => {
        //stop page from refreshing
        event.preventDefault()
        //populate id, name, and color of new ingredient
        console.log(topping)
        addCustomTopping({
            id: Math.floor(Math.random() * 100 + 13),
            name: topping,
            color: "#"+Math.floor(Math.random()*16777215).toString(16)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="text" 
                value={topping}
                onChange={handleChange} 
                placeholdler="Add a custom topping here"
            />
            <button onSubmit={handleSubmit}>
                Add Custom Topping
            </button>
        </form>
    )
}

export default CustomToppingForm