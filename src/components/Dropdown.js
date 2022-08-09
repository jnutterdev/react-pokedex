import {useState} from "react"; // sets the variable display and function to setDisplay
// allows us to toggle and update dropdown display each time the dropdown element is clicked. 

function Dropdown(props) {

    const [ display, setDisplay ] = useState('none');
    const [ count, setCount ] = useState(0);

    function handleClick() {
        if ( display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }
    return (
        <div>
            <button 
                className="my-6 bg-blue-300 p-3 rounded-md"
                onClick={handleClick}
                >
                Select your pokémon:
            </button>

            <div style={{ display: display }}>
                { props.children }
            </div>
        </div>
    )
}

export { Dropdown }