import {
  POKEMON_URL,
  POKEMON_SPECIES,
  POKEMONS_URL_WITH_LIMIT,
} from "../porject-urls/porjectUrls";
import axios from "axios";

export async function fetchPokemonDetails({ queryKey }) {
  const { data } = await axios.get(POKEMON_URL + queryKey[1]);

  return [data];
}

export async function fetchPokemonSpecies({ queryKey }) {
  const { data } = await axios.get(POKEMON_SPECIES + queryKey[1]);
  return [data];
}
export async function fetchPokemonEvolutionsChain({ queryKey }) {
  const { data } = await axios.get(queryKey[1]);
  return [data];
}

export async function fetchFirstPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(POKEMON_URL + queryKey[1]);

  return [data];
}
export async function fetchSecondPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(POKEMON_URL + queryKey[1]);

  return [data];
}

export async function fetchThirdPokemonEvolutionImage({ queryKey }) {
  const { data } = await axios.get(POKEMON_URL + queryKey[1]);

  return [data];
}
export async function fetchImages({ queryKey }) {
  const { data } = await axios.get(POKEMON_URL + queryKey[1]);
  return [data];
}
export async function fetchPokemons({ queryKey }) {
  const { data } = await axios.get(POKEMONS_URL_WITH_LIMIT + queryKey[1]);
  return data;
}
