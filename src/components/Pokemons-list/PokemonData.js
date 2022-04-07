import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PokemonData() {
  let thereIsThirdEvolution = false;
  let thereIsSecondEvolution = false;
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  ///////////////////////////////////////////////
  //fetches pokemon deatails such as id and picture//
  //////////////////////////////////////////////////
  async function fetchPokemonDetails({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
    );

    return [data];
  }
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
  async function fetchPokemonSpecies({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon-species/" + queryKey[1]
    );
    return [data];
  }
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
  async function fetchPokemonEvolutionsChain({ queryKey }) {
    const { data } = await axios.get(queryKey[1]);
    return [data];
  }
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
  const checkingIfPokemonHasSecondOrThirdEvoluton = () => {
    if (
      pokemonEvolutionChain_data?.[0]?.chain.evolves_to.length === 0 ||
      pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to
        .length === 0
    ) {
      thereIsThirdEvolution = false;
    } else {
      thereIsThirdEvolution = true;
      thirdPokemonEvolutionName =
        pokemonEvolutionChain_data?.[0]?.chain.evolves_to?.[0]?.evolves_to?.[0]
          ?.species.name;
    }
  };
  checkingIfPokemonHasSecondOrThirdEvoluton();

  ////////////////////////////////////////////////////////////////
  //feches first pokemon's evolution image
  /////////////////////////////////////////////////
  async function fetchFirstPokemonEvolutionImage({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
    );

    return [data];
  }
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
  async function fetchSecondPokemonEvolutionImage({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
    );

    return [data];
  }
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
  async function fetchThirdPokemonEvolutionImage({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
    );

    return [data];
  }
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
  let allEvolutionImages = [
    firstPokemonEvolutionImage,
    secondPokemonEvolutionImage,
    thirdPokemonEvolutionImage,
  ];
  //////////////////////////////////////////////
  ///////////////////////////////////////////////
  //////////////////////////////////////////
  const pokemonsImagesFilteredFromUndefinedGenerator = (allEvolutionImages) => {
    return allEvolutionImages.filter((allEvolutionImages) => {
      return allEvolutionImages !== undefined;
    });
  };
  const newImages =
    pokemonsImagesFilteredFromUndefinedGenerator(allEvolutionImages);

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
      <Modal
        style={{ zIndex: "10" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            style={{ objectFit: "contain" }}
            component="img"
            height="140"
            image={data?.[0].sprites.other.dream_world.front_default}
            alt="green iguana"
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {id}
          </Typography>
          {/* ///////////// types/////////////// */}

          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              type
            </Typography>
            {data?.[0].types.map((type, i) => {
              return (
                <Typography key={i} variant="h6" component="h2">
                  {type.type.name}
                </Typography>
              );
            })}
          </Box>
          {/* ///////////// stats/////////////// */}
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              stats
            </Typography>
            {data?.[0].stats.map((stat, i) => {
              return (
                <Typography
                  key={i}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {stat.stat.name}
                  {stat.base_stat}
                </Typography>
              );
            })}
          </Box>
          {/* ///////////// evolution/////////////// */}
          <Box>
            {}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              evolution
            </Typography>
            <Box>
              {newImages.length !== 1 && (
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  height="140"
                  image={newImages[0]}
                  alt="green iguana"
                />
              )}

              <Typography id="modal-modal-title" variant="h6" component="h2">
                {firstPokemonEvolutionName}
              </Typography>
            </Box>
            <Box>
              {secondPokemonEvolutionName && (
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  height="140"
                  image={secondPokemonEvolutionImage}
                  alt="green iguana"
                />
              )}
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {secondPokemonEvolutionName}
              </Typography>
            </Box>
            <Box>
              {thirdPokemonEvolutionName && (
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  height="140"
                  image={thirdPokemonEvolutionImage}
                  alt="green iguana"
                />
              )}
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {thirdPokemonEvolutionName}
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
