import React from 'react';
import Logo from "./components/Images/pokedex.png";

import Button from "./components/Button";

function App() {
 
  return (

  <div>
    <img src={Logo} alt="Pokédex" />
    <h1>Pokédex</h1>
    <Button />
  </div>
  
  )
}

export default App;