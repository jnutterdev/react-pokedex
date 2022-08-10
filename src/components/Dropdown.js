import {useState} from "react"; // sets the variable display and function to setDisplay
// allows us to toggle and update dropdown display each time the dropdown element is clicked. 

function Dropdown(props) {

    return (
        <div>
            <h1 className="my-6 bg-blue-300 p-3 rounded-md"> Select your pokémon:</h1>
            <div>{ props.children }</div>
        </div>
    )
}

export { Dropdown }