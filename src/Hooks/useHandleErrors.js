import usePokemonDataFetch from "./usePokemonDataFetch";

export const useHandleErrors = () => {
  let isError = false;
  const {
    pokemonSpecies_isError,
    firstPokemonEvolutionImageFetch_isError,
    pokemonEvolutionChain_isError,
    pokemonSpecies_error,
    pokemonEvolutionChain_error,
    firstPokemonEvolutionImageFetch_error,
  } = usePokemonDataFetch();

  let error;
  if (pokemonSpecies_isError) {
    isError = true;
    error = <div>Error!{pokemonSpecies_error.message} </div>;
  } else {
    isError = false;
  }

  if (pokemonEvolutionChain_isError) {
    isError = true;

    return <div>Error! {pokemonEvolutionChain_error.message}</div>;
  } else {
    isError = false;
  }

  if (firstPokemonEvolutionImageFetch_isError) {
    isError = true;

    return <div>Error! {firstPokemonEvolutionImageFetch_error.message}</div>;
  }
  return { error };
};
