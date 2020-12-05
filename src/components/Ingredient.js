const Ingredient = ({id, name, selectedTopping, color}) => {
    return (
    <div>
      <div className="ingredient" key = {id} style={{backgroundColor: color}}>{name}</div>
      <button onClick={selectedTopping}>Add Topping</button>
    </div>
    );
};

export default Ingredient;