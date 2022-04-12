import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import {
  fetchPokemonData,
  fetchPokemonEvolutionsChain,
  fetchPokemonSpecies,
} from "../components/fetchData";

export default function usePokemonDataFetch() {
  let thereIsThirdEvolution = false;
  let thereIsSecondEvolution = false;
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["posts", id],
    fetchPokemonData,
    {
      keepPreviousData: true,
    }
  );
  const {
    data: pokemonSpecies_data,
    error: pokemonSpecies_error,
    isError: pokemonSpecies_isError,
    isLoading: pokemonSpecies_isLoading,
  } = useQuery(["posts", data?.[0]?.id], fetchPokemonSpecies, {
    keepPreviousData: true,
  });
  const {
    data: pokemonEvolutionChain_data,
    error: pokemonEvolutionChain_error,
    isError: pokemonEvolutionChain_isError,
    isLoading: pokemonEvolutionChain_isLoading,
  } = useQuery(
    ["posts", pokemonSpecies_data?.[0]?.evolution_chain.url],
    fetchPokemonEvolutionsChain,
    {
      keepPreviousData: true,
    }
  );
  let firstPokemonEvolutionName =
    pokemonEvolutionChain_data?.[0]?.chain.species.name;
  let secondPokemonEvolutionName;
  let secondPokemonEvolutionLength =
    pokemonEvolutionChain_data?.[0]?.chain.evolves_to.length;
  if (secondPokemonEvolutionLength === 0) {
    thereIsSecondEvolution = false;
  } else {
    thereIsSecondEvolution = true;
    secondPokemonEvolutionName =
      pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.species.name;
  }
  let thirdPokemonEvolutionName;
  let thirdPokemonEvolutionLength =
    pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to.length;

  if (secondPokemonEvolutionLength === 0 || thirdPokemonEvolutionLength === 0) {
    thereIsThirdEvolution = false;
  } else {
    thereIsThirdEvolution = true;
    thirdPokemonEvolutionName =
      pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to?.[0]
        ?.species.name;
  }

  const {
    data: firstPokemonEvolutionImageFetch_data,
    error: firstPokemonEvolutionImageFetch_error,
    isError: firstPokemonEvolutionImageFetch_isError,
    isLoading: firstPokemonEvolutionImageFetch_isLoading,
  } = useQuery(["posts", firstPokemonEvolutionName], fetchPokemonData, {
    keepPreviousData: true,
  });

  ////////////////////////////////////////////////////////////////
  //feches second pokemon's evolution image
  /////////////////////////////////////////////////

  const { data: secondPokemonEvolutionImageFetch_data } = useQuery(
    ["posts", secondPokemonEvolutionName],
    fetchPokemonData,
    { enabled: thereIsSecondEvolution },

    {
      keepPreviousData: true,
    }
  );
  ////////////////////////////////////////////////////////////////
  //fetches third pokemon's evolution image
  /////////////////////////////////////////////////

  const { data: thirdPokemonEvolutionImageFetch_data } = useQuery(
    ["posts", thirdPokemonEvolutionName],
    fetchPokemonData,
    { enabled: thereIsThirdEvolution },
    {
      keepPreviousData: true,
    }
  );

  const firstPokemonEvolutionImage =
    firstPokemonEvolutionImageFetch_data?.[0]?.sprites?.other?.dream_world
      .front_default;
  const secondPokemonEvolutionImage =
    secondPokemonEvolutionImageFetch_data?.[0]?.sprites?.other?.dream_world
      .front_default;
  const thirdPokemonEvolutionImage =
    thirdPokemonEvolutionImageFetch_data?.[0]?.sprites?.other?.dream_world
      .front_default;
  const pokemonData = {
    data: data,
    error: error,
    isError: isError,
    isLoading: isLoading,
    pokemonSpecies_data: pokemonSpecies_data,
    pokemonSpecies_error: pokemonSpecies_error,
    pokemonSpecies_isError: pokemonSpecies_isError,
    pokemonSpecies_isLoading: pokemonSpecies_isLoading,
    pokemonEvolutionChain_data: pokemonEvolutionChain_data,
    pokemonEvolutionChain_error: pokemonEvolutionChain_error,
    pokemonEvolutionChain_isError: pokemonEvolutionChain_isError,
    pokemonEvolutionChain_isLoading: pokemonEvolutionChain_isLoading,
    firstPokemonEvolutionImageFetch_error:
      firstPokemonEvolutionImageFetch_error,
    firstPokemonEvolutionImageFetch_isError:
      firstPokemonEvolutionImageFetch_isError,
    firstPokemonEvolutionImageFetch_isLoading:
      firstPokemonEvolutionImageFetch_isLoading,
    firstPokemonEvolutionImage: firstPokemonEvolutionImage,
    secondPokemonEvolutionImage: secondPokemonEvolutionImage,
    thirdPokemonEvolutionImage: thirdPokemonEvolutionImage,
    firstPokemonEvolutionName: firstPokemonEvolutionName,
    secondPokemonEvolutionName: secondPokemonEvolutionName,
    thirdPokemonEvolutionName: thirdPokemonEvolutionName,
    id: id,
  };

  return { ...pokemonData };
}
