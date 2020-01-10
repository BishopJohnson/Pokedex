import React, { Component } from 'react';

// Custom components
import SearchPokemon from './SearchPokemon';
import UIPokedex from './../ui/UIPokedex';
import UIDexItem from './../ui/UIDexItem';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    this.searchPokemon();
  }

  searchPokemon = (name = '') => { // Queries the server
    if (process.env.NODE_ENV === 'development') { // Use proxy in development build
      fetch(`/api/pokedex?name=${name}`)
      .then(res => res.json())
      .then(pokemon => this.setState({pokemon}));
    } else {
      fetch(`https://pokedex-server.appspot.com/api/pokedex?name=${name}`)
      .then(res => res.json())
      .then(pokemon => this.setState({pokemon}));
    }
  };

  render() {
    return (
      <div className="container">
        <UIPokedex />
        <SearchPokemon searchPokemon={this.searchPokemon} />
        <div className="long">
          <UIDexItem pokemon={this.state.pokemon} />
        </div>
      </div>
    );
  }
}
