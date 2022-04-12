import usePokemonDataFetch from "./usePokemonDataFetch";

export const useHandleErrors = () => {
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
    error = <div>Error!{pokemonSpecies_error?.message} </div>;
  } else {
  }

  if (pokemonEvolutionChain_isError) {
    return <div>Error! {pokemonEvolutionChain_error?.message}</div>;
  } else {
  }

  if (firstPokemonEvolutionImageFetch_isError) {
    return <div>Error! {firstPokemonEvolutionImageFetch_error?.message}</div>;
  }
  return { error };
};
