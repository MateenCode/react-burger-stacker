import React from "react";
// Components imports

import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";

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
