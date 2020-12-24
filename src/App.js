import React, { useState } from 'react';
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'
import IngredientForm from './components/IngredientForm'
import Karen from './components/Karen'

import "./css/App.css";

//we want to render the ingredients as soon as the user loads the page, thats why the array is inside app.js. which is the parent. 
const App = () => {

    const [items, setItems] = useState([ 
        { name: "Kaiser Bun", color: "tan", style: "50% 50% 0 0", height:"6vw", width: "40%", image: "https://thumbs.dreamstime.com/b/burger-top-bun-icon-cartoon-style-vector-web-design-isolated-white-background-191669233.jpg" },
        { name: "Mayo", color: "goldenrod", style: "50% 50% 0 0", height:"4.7vw", width: "25%", image: "https://previews.123rf.com/images/madllen/madllen1411/madllen141100340/33962508-decoration-zig-zag-of-cheese-sauce-isolated-on-white-background.jpg" },
        { name: "Pickles", color: "peru", style: "50% 50% 0 0", height:"4vw", width: "25%", image: "https://i.pinimg.com/originals/52/1e/7d/521e7dc9b7caac57bc9496de6aecb5d8.jpg" },
        { name: "Beef Patty", color: "#3F250B", style: "20%", height:"6vw",width: "30%", image: "https://lh3.googleusercontent.com/proxy/FBguCIDQdGxgrTC9g7IhNfRoKlI_Z_1M6PhhAqtuSBd4YLqlot8XWwJSOAFKvVX3H88yWvNHMfLuTkfqIPCDRTEz" },
        { name: "Ketchup", color: "brown", style: "20%", height:"3.5vw", width: "30%", image: "https://st3.depositphotos.com/1010050/15368/i/1600/depositphotos_153689926-stock-photo-red-drizzle-sauce.jpg" },
        { name: "Cheese", color: "yellow", style: "20%", height:"4vw", width: "40%", image: "https://img.pngio.com/cheese-slice-free-png-images-2019-cheese-slice-png-379_283.png" },
        { name: "Bottom bun", color: "burlywood", style: "20%", height:"7vw", width: "40%", image: "https://previews.123rf.com/images/nsit0108/nsit01081901/nsit0108190101504/114641506-fresh-burger-bun-icon-cartoon-of-fresh-burger-bun-vector-icon-for-web-design-isolated-on-white-backg.jpg" },
        { name: "Lettuce", color: "lawngreen", style: "20px", height:"3vw", width: "30%", image: "https://w0.pngwave.com/png/345/100/hamburger-lettuce-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-illustration-vegetable-lettuce-burger-png-clip-art.png" },
        { name: "Tomato", color: "tomato", style: "0", height:"4vw", width: "25%", image: "https://www.seekpng.com/png/small/434-4344968_tomato-slice-transparent-background.png" },
        { name: "Bacon", color: "maroon", style: "0", height:"6vw", width: "30%", image: "https://media.istockphoto.com/illustrations/hand-drawn-watercolor-slices-of-bacon-illustration-id1201316872"  },
        { name: "Onion", color: "lightyellow", style: "13px", height:"6vw", width: "25%", image: "https://previews.123rf.com/images/belchonock/belchonock1906/belchonock190613181/125165962-fresh-slices-of-red-onion-on-white-background.jpg"  }, 
    ])




    const addToIngredients = (newItem) =>{
      setItems ([newItem, ...items])
    }




    const removeIngredients = () =>{
     items.shift()
     setItems ([...items])
    }



    const [burger, setBurger] = useState([])

    const addItem = (event, newItem) =>{
      event.preventDefault()
      console.log(newItem)
      console.log(burger)
      setBurger([newItem, ...burger])
      console.log(burger)
    }


    const clearBurger = ()=> {
      console.log(clearBurger)
      setBurger([])
  }


    return (

     <div style={{flexDirection: "row", jutifyContent: 'center'}}> 
          <IngredientList items={items} addItem ={addItem} burger={burger} removeIngredients={removeIngredients} /> 
          <BurgerPane items={items} addItem ={addItem} burger={burger} clearBurger={clearBurger} /> 
          <IngredientForm addToIngredients ={addToIngredients} /> 
          <Karen />
      </div>
    )
  }
  



export default App;
