import axios from "axios";

export async function fetchPokemonDetails({ queryKey }) {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
  );

  return [data];
}

export async function fetchPokemonSpecies({ queryKey }) {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/" + queryKey[1]
  );
  return [data];
}
export async function fetchPokemonEvolutionsChain({ queryKey }) {
  const { data } = await axios.get(queryKey[1]);
  return [data];
}

export async function fetchFirstPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
  );

  return [data];
}
export async function fetchSecondPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
  );

  return [data];
}

export async function fetchThirdPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
  );

  return [data];
}
