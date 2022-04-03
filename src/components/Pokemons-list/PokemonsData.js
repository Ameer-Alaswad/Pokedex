import * as React from "react";

const PokemonsData = ({ pokemonsData }) => {
  return (
    <div>
      {pokemonsData.map((data, i) => {
        let pokemonName = data.name;
        let pokemonNumber = i + 1;
        return (
          <div>
            <p>{pokemonName}</p>
            <p>{pokemonNumber}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonsData;
