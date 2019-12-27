import React from 'react';

const UIDexItem = (props) => {
  const { pokemon } = props;
  const pokemonList = pokemon.map(pokemon => {
    return (
      <div className="pokemon" key={pokemon.id}>
        <div>Id: { pokemon.id }</div>
        <div>Name: { pokemon.name }</div>
        <div>Type: { pokemon.primary_type } { pokemon.secondary_type }</div>
      </div>
    );
  });

  return (
    <div className="dex-item">
      { pokemonList }
    </div>
  );
}

export default UIDexItem;
