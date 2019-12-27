import React, { Component } from 'react';

// Custom components
import DexList from './DexList';
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
    fetch(`/api/pokedex`)
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon}));
  }

  searchPokemon = (name = '') => { // Queries the server
    fetch(`/api/pokedex?name=${name}`)
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon}));
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
  //<UIDexItem pokemon={this.state.pokemon} />
}
