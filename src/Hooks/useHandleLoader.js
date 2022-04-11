import usePokemonDataFetch from "./usePokemonDataFetch";

export const useHandleLoader = () => {
  let isLoadingCheck = false;
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
    isLoadingCheck = true;
    loading = <div> Loading...</div>;
  }

  return { loading };
};
