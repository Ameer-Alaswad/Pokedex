import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { modalContainerResponsive, theme } from "./pokemonDataStyles";
import { ThemeProvider } from "@mui/material/styles";
import PokemonEvolutions from "./pokemon-data-components/PokemonEvolutions";
import PokemonTpyes from "./pokemon-data-components/PokemonType";
import PokemonStatsAndImageAndName from "./pokemon-data-components/PokemonStatsAndImageAndName";
import {
  fetchFirstPokemonEvolutionImage,
  fetchPokemonDetails,
  fetchPokemonEvolutionsChain,
  fetchPokemonSpecies,
  fetchSecondPokemonEvolutionImage,
  fetchThirdPokemonEvolutionImage,
} from "../fetchData";

export default function PokemonData() {
  let thereIsThirdEvolution = false;
  let thereIsSecondEvolution = false;
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  ///////////////////////////////////////////////
  //fetches pokemon deatails such as id and picture//
  //////////////////////////////////////////////////

  const { data, error, isError, isLoading } = useQuery(
    ["posts", id],
    fetchPokemonDetails,
    {
      keepPreviousData: true,
    }
  );

  /////////////////////////////////////////////////////////////////////
  // fechtes pokemon species to get access to the evoluton-chain url//
  //  whitch will be use later to ge pokemon's evolution.//
  //////////////////////////////////////////////////////////////////

  const {
    data: pokemonSpecies_data,
    error: pokemonSpecies_error,
    isError: pokemonSpecies_isError,
    isLoading: pokemonSpecies_isLoading,
  } = useQuery(["posts", data?.[0]?.id], fetchPokemonSpecies, {
    keepPreviousData: true,
  });
  /////////////////////////////////////////////////////////////////////
  // feches pokemon evolution
  //////////////////////////////////////////////////////////////////////

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
  //////////////////////////////////////////
  //////////////////////////////////////////
  let firstPokemonEvolutionName =
    pokemonEvolutionChain_data?.[0]?.chain.species.name;
  let secondPokemonEvolutionName;
  const checkingIfPokemonHasSecondEvolotion = () => {
    if (pokemonEvolutionChain_data?.[0]?.chain.evolves_to.length === 0) {
      thereIsSecondEvolution = false;
    } else {
      thereIsSecondEvolution = true;
      secondPokemonEvolutionName =
        pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.species.name;
    }
  };
  checkingIfPokemonHasSecondEvolotion();
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  let thirdPokemonEvolutionName;
  // const checkingIfPokemonHasSecondOrThirdEvoluton = () => {
  if (
    pokemonEvolutionChain_data?.[0]?.chain.evolves_to.length === 0 ||
    pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to
      .length === 0
  ) {
    // setThereIsThirdEvolution(() => false);
    // thereIsThirdEvolution = false;
  } else {
    // setThereIsThirdEvolution(() => true);
    thereIsThirdEvolution = true;
    // console.log("second");
    thirdPokemonEvolutionName =
      pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to?.[0]
        ?.species.name;
  }
  // };
  // checkingIfPokemonHasSecondOrThirdEvoluton();

  ////////////////////////////////////////////////////////////////
  //feches first pokemon's evolution image
  /////////////////////////////////////////////////

  const {
    data: firstPokemonEvolutionImageFetch_data,
    error: firstPokemonEvolutionImageFetch_error,
    isError: firstPokemonEvolutionImageFetch_isError,
    isLoading: firstPokemonEvolutionImageFetch_isLoading,
  } = useQuery(
    ["posts", firstPokemonEvolutionName],
    fetchFirstPokemonEvolutionImage,
    {
      keepPreviousData: true,
    }
  );
  ////////////////////////////////////////////////////////////////
  //feches second pokemon's evolution image
  /////////////////////////////////////////////////

  const {
    data: secondPokemonEvolutionImageFetch_data,
    error: secondPokemonEvolutionImageFetch_error,
    isError: secondPokemonEvolutionImageFetch_isError,
    isLoading: secondPokemonEvolutionImageFetch_isLoading,
  } = useQuery(
    ["posts", secondPokemonEvolutionName],
    fetchSecondPokemonEvolutionImage,
    { enabled: thereIsSecondEvolution },

    {
      keepPreviousData: true,
    }
  );
  ////////////////////////////////////////////////////////////////
  //feches third pokemon's evolution image
  /////////////////////////////////////////////////

  const {
    data: thirdPokemonEvolutionImageFetch_data,
    error: thirdPokemonEvolutionImageFetch_error,
    isError: thirdPokemonEvolutionImageFetch_isError,
    isLoading: thirdPokemonEvolutionImageFetch_isLoading,
  } = useQuery(
    ["posts", thirdPokemonEvolutionName],
    fetchThirdPokemonEvolutionImage,
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

  if (isLoading) return <div> Loading...</div>;
  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  if (pokemonSpecies_isLoading) return <div> Loading...</div>;
  if (pokemonSpecies_isError)
    return <div>Error! {pokemonSpecies_error.message}</div>;
  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  if (pokemonEvolutionChain_isLoading) return <div> Loading...</div>;
  if (pokemonEvolutionChain_isError)
    return <div>Error! {pokemonEvolutionChain_error.message}</div>;
  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  if (firstPokemonEvolutionImageFetch_isLoading) return <div> Loading...</div>;
  if (firstPokemonEvolutionImageFetch_isError)
    return <div>Error! {firstPokemonEvolutionImageFetch_error.message}</div>;
  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <ThemeProvider theme={theme}>
        <Modal
          style={{ zIndex: "10" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={modalContainerResponsive}
            style={theme.custom.pokemonModalContainer}
          >
            <Box
              style={{ height: "100%" }}
              sx={theme.custom.pokemonsDataContainer.sx}
            >
              {/* ///////////// stats, image and name/////////////// */}
              <PokemonStatsAndImageAndName data={data} id={id} />
              {/* ///////////// types/////////////// */}
              <PokemonTpyes data={data} />
              {/* ///////////// evolution/////////////// */}
              <PokemonEvolutions
                firstPokemonEvolutionImage={firstPokemonEvolutionImage}
                firstPokemonEvolutionName={firstPokemonEvolutionName}
                secondPokemonEvolutionName={secondPokemonEvolutionName}
                secondPokemonEvolutionImage={secondPokemonEvolutionImage}
                thirdPokemonEvolutionName={thirdPokemonEvolutionName}
                thirdPokemonEvolutionImage={thirdPokemonEvolutionImage}
              />
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
