
const ClearBurger = (props) => {
    console.log(props.deletedItems)
    return(
    <div>
        <ul>
                    <button onClick= {(event, deletedItems)=>
                    {
                        {props.deleteItem(event, deletedItems)}
                    }}>Delete</button>

        </ul> 

    </div>  
    )
}





export default ClearBurger