import React, {useState, useEffect, useReducer, useRef} from 'react'; 
import './App.scss';

import Nav from './components/Nav';
// import Search from './components/Search';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  
  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
        case 'STORIES_FETCH_FAILURE':
          return {
            ...state,
            data: state.data.filter(
              story => action.payload.objectID !== story.objectID
            ),
          };
          default: 
          throw new Error();
  }
};

const App = () => {


  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'charmander',
  );

  const [stories, dispatchStories] = useReducer(
    storiesReducer,
    { data: [],  isLoading: false, isError: false}
  );

  useEffect(() => {

    if (!searchTerm) return;
    dispatchStories({ type: 'STORIES_FETCH_INIT' }); 

    fetch(`${API_ENDPOINT}${searchTerm}`)
    .then(response => response.json())
    .then(result => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: Object.values(result),
      });
    })
    .catch(() => 
    dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    );
  },  [searchTerm]);


  const handleRemoveStory = item =>  {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="App">
      <Nav />
        <div className="container">
          <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={handleSearch}
          >
            <strong>Search: </strong>
            </InputWithLabel>
          <hr/>
          {stories.isError && <p>Something went wrong...</p>}

          {stories.isLoading ? (
            <p>Loading...</p>
          ) : (
            <List 
            list={stories.data} 
            onRemoveItem={handleRemoveStory}
            />
          )}
            </div>
          </div>
          );
       };

       const InputWithLabel = ({
         id, 
         value,
         type = 'text',
         onInputChange,
         isFocused,
         children,
       }) => {
         const inputRef = useRef();

         useEffect(() => {
           if (isFocused) {
             inputRef.current.focus();
           }
         }, [isFocused]);

         return (
           <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input 
            ref={inputRef}
            id={id}
            type={type}
            value={value}
            onChange={onInputChange}
            />
           </>
         );
       };


const List = ({ list, onRemoveItem }) => 
list.map(item =>(
<Item key={item.objectID} 
item={item} 
onRemoveItem={onRemoveItem}
/>
));

const Item = ({ item, onRemoveItem }) => (
  <div>
    <span>
      <a href={item.url}>{item.name}</a>
    </span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </div>
);

export default App;
