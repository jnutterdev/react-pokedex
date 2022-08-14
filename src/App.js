import React from 'react';
import Logo from "./components/Images/pokedex.png";
import StarRating from './components/StarRating';
import List from './components/List';
import Search from './components/Search';

import { Dropdown } from './components/Dropdown';
import { Element } from './components/Element';
import Button from "./components/Button";

const App = () => {
 

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      points: 4, 
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2, 
      points: 5, 
      objectID: 1,
    }
  ]



  return (

  <div className="container sm-auto px-6">
    <img src={Logo} alt="Pokédex" />

    <div>
      This is my search area
      <Search />
    </div>

    <Dropdown>
      <Element />
    </Dropdown>

    <StarRating 
    className="flex p-5"
    style={{ backgroundColor: 'lightblue' }}
    onDoubleClick={e => alert("double click")} 
    />
    <Button />
    <div className="p-5">
      <h1 className="bg-yellow-100 p-5">Your selected Pokémon is:</h1>
        
    </div>    
  
    <List list={stories}/>
  </div> 
  );
};

export default App;