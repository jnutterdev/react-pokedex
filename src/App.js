import React, {useState} from 'react'; 
import './App.scss';

import Nav from './components/Nav';
// import Search from './components/Search';

const App = () => {
    const stories = [
      {
        title: 'React Pokédex',
        url: 'https://pokeapi.co/docs/v2',
        author: 'John',
        num_comments: 3,
        points: 4, 
        objectID: 0,
      },
      {
        title: 'Rails Pokédex',
        url: 'https://pokeapi.co/docs/v2',
        author: 'John',
        num_comments: 1,
        points: 1, 
        objectID: 1,
      },
    ];

  const [searchTerm, setSearchTerm] = useState(' ');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => 
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="App">
      <Nav />
        <div className="container">
          <Search onSearch={handleSearch} />
          <hr/>
          <List list={searchedStories} />
        </div>
    </div>
  );
};

const Search = (props) => (
      <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={props.onSearch} />
      </div>
);

const List = props => 
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));

  


export default App;
