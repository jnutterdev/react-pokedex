import React from "react";

const Search = (props) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
  }; 

  return (
    <div className="p-5 bg-blue-100">
        <label htmlFor="searcg"> Search:</label>
        <input
        className='m-3' 
        id="search" 
        type="text" 
        onChange={handleChange}
        />

        <div>{searchTerm}</div>
  </div>
  )
};

export default Search;