import React, {useState} from 'react'

const IngredientForm = ({newIngredient}) => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        newIngredient(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='text' value={text} onChange={handleChange} placeholder='add ingredient...' />
            <button onSubmit={handleSubmit}>Add Ingredient</button>
        </form>
    )
}

export default IngredientForm