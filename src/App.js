import React from 'react';
import Logo from "./components/Images/pokedex.png";
import { Dropdown } from './components/Dropdown';
import { Element } from './components/Element';

import Button from "./components/Button";

function App() {
 
  return (

  <div className="container sm-auto px-6">
    <img src={Logo} alt="Pokédex" />

    <Dropdown>
      <Element />
    </Dropdown>

    <Button />

  </div> 
  
  )
}

export default App;