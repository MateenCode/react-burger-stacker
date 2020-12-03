import React, {useState} from "react";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([
        { id: 1, name: "Kaiser Bun", color: "saddlebrown" },
        { id: 2,name: "Sesame Bun", color: "sandybrown" },
        { id: 3, name: "Gluten Free Bun", color: "peru" },
        { id: 4, name: "Lettuce Wrap", color: "olivedrab" },
        { id: 5, name: "Beef Patty", color: "#3F250B" },
        { id: 6, name: "Soy Patty", color: "#3F250B" },
        { id: 7, name: "Black Bean Patty", color: "#3F250B" },
        { id: 8, name: "Chicken Patty", color: "burlywood" },
        { id: 9, name: "Lettuce", color: "lawngreen" },
        { id: 10, name: "Tomato", color: "tomato" },
        { id: 11, name: "Bacon", color: "maroon" },
        { id: 12, name: "Onion", color: "lightyellow" },
      ])

    return <div>FunctionalComponent</div>;
};

export default Ingredients;