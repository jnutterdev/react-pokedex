import React, { useState } from 'react'

class Search extends React.Component {

    state = {
        pokemon: []
    }
   

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
        .then(res => res.json())
        .then((data) => {
            this.setState({pokemon.data})
        })
        .catch(console.log)
    }

    const pokemon = ({ pokemon }) => {
        return (
            <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="Find a repository"></div>
                <div className="control">
                    <a className="button is-info">
                        Search
                    </a>
                </div>
                <div>
                {pokemon.map((poke) => (
                    <h2>
                        {poke.name}
                    </h2>
                )
                </div>
            </div>
        )
    }
}

export default Search