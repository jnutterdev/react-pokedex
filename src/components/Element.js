import Select from 'react-select';
import {useState} from "react";

function Element() {

    const [pokemon, setPokemon] = useState();

    const options = [
        { label: "Pikachu", value: 1 },
        { label: "Charmander", value: 2 },
        { label: "Squirtle", value: 3 },
        { label: "Bulbasaur", value: 4 },
    ]   

      
        return (
        <div>
            <div className="px-3 py-1">
                <Select 
                value={pokemon}
                options={options} 
                onChange={setPokemon}
                placeholder="Select Pokémon"
                autoFocus
                />
            </div>
        </div>
    )
}

export { Element }