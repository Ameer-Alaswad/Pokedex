import usePokemonDataFetch from "./usePokemonDataFetch";

export const useHandleLoader = () => {
  const {
    isLoading,
    pokemonSpecies_isLoading,
    pokemonEvolutionChain_isLoading,
    firstPokemonEvolutionImageFetch_isLoading,
  } = usePokemonDataFetch();

  let loading;
  if (
    isLoading ||
    pokemonSpecies_isLoading ||
    pokemonEvolutionChain_isLoading ||
    firstPokemonEvolutionImageFetch_isLoading
  ) {
    loading = <div> Loading...</div>;
  }

  return { loading };
};
