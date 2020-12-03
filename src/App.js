import React from "react";
// Components imports
import IngredientList from "./components/IngredientList";
// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <div class="column">
        <IngredientList />
      </div>
      <div class="column">

      </div>
    </div>
  );
};

export default App;
