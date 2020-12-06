import React ,{useState}from "react";
// Components imports
import Ingredients from './components/Ingredients'
import StackingArea from './components/StackingArea'
// CSS imports
import "./css/App.css";






const App = () => {

  const [selectedIngredients, setSelectedIngredients] = useState([])


  const sendData = (param) =>{
     setSelectedIngredients([param,...selectedIngredients])
  }



  return (
    <div className="App">
      <Ingredients sendData={sendData}/>
    
      <StackingArea ingredients={selectedIngredients}/>
    </div>
  );
};

export default App;
