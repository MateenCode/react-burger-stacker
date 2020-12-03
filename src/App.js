import React from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <IngredientList />
      <BurgerPane />
    </div>
  );
};

export default App;
