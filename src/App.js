import React from 'react';
import Logo from "./components/Images/pokedex.png";
import StarRating from './components/StarRating';

import { Dropdown } from './components/Dropdown';
import { Element } from './components/Element';


import Button from "./components/Button";

function App(props) {
 
  return (

  <div className="container sm-auto px-6">
    <img src={Logo} alt="Pokédex" />

    <Dropdown>
      <Element />
    </Dropdown>

    <StarRating 
    className="flex"
    style={{ backgroundColor: 'lightblue' }}
    onDoubleClick={e => alert("double click")} 
    />
    <Button />
    <div>
      <h1>Your selected Pokémon is:</h1>
      <p></p>  
    </div>    
  </div> 
  
  )
}

export default App;