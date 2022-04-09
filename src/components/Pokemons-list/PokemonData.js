import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import CardMedia from "@mui/material/CardMedia";
import { useStyles, theme } from "../styles/pokemonDataStyles";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "55%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 700px)": {
    height: "80%",
  },
  "@media (max-width: 688px)": {
    height: "100%",
  },
};

export default function PokemonData() {
  const classes = useStyles();
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
      <ThemeProvider theme={theme}>
        <Modal
          style={{ zIndex: "10" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={theme.custom.pokemonModalContainer}>
            <Box
              style={{ height: "100%" }}
              sx={theme.custom.pokemonsDataContainer.sx}
            >
              <div className={classes.pokemonNameAndStatsComponent}>
                {/* ///////////// stats/////////////// */}
                <div className={classes.pokemonStatsHeadlineAndStatsContainer}>
                  <Typography
                    style={{ textAlign: "center" }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <strong>Stats</strong>
                  </Typography>
                  <Box
                    sx={theme.custom.pokemonStatsContainer.sx}
                    style={theme.custom.pokemonStatsContainer}
                  >
                    {data?.[0]?.stats.map((stat, i) => {
                      return (
                        <div
                          className={
                            classes.containerOfPeragraphsOfPokemonStats
                          }
                          key={i}
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          <h1 className={classes.typePeragraphInpokemonStats}>
                            {stat.stat.name.toUpperCase()} :
                          </h1>
                          <span className={classes.statsNumbersPeragraph}>
                            {stat.base_stat}
                          </span>
                        </div>
                      );
                    })}
                  </Box>
                </div>

                <Box
                  style={{ width: "250px" }}
                  sx={theme.custom.pokemonImageAndName.sx}
                >
                  <h3 className={classes.pokemonName}>{id?.toUpperCase()}</h3>
                  <div className={classes.pokemonImageContainer}>
                    <img
                      className={classes.pokemonImage}
                      src={data?.[0].sprites.other.dream_world.front_default}
                      alt="green iguana"
                    />
                  </div>
                </Box>
              </div>

              {/* ///////////// types/////////////// */}
              <Box sx={{ display: "flex" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <strong>Type:</strong>
                </Typography>
                {data?.[0].types.map((type, i) => {
                  return (
                    <Typography
                      style={theme.custom.typesTypography}
                      key={i}
                      variant="h6"
                      component="h2"
                    >
                      {type.type.name}
                    </Typography>
                  );
                })}
              </Box>
              {/* ///////////// evolution/////////////// */}
              {newImages.length !== 1 && (
                <div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <strong>Evolutions</strong>
                  </Typography>
                  <div className={classes.evolutionImagesAndNamesContainer}>
                    <Box
                      sx={
                        theme.custom.pokemonsEvolutionsImageAndNameContainers.sx
                      }
                    >
                      {newImages.length !== 1 && (
                        <div className={classes.EvolutionImageContainer}>
                          <img
                            className={classes.evolutionImages}
                            component="img"
                            height="140"
                            src={newImages[0]}
                            alt="green iguana"
                          />
                        </div>
                      )}

                      <Typography
                        style={theme.custom.firstEvolutionsName}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <strong>{firstPokemonEvolutionName}</strong>
                      </Typography>
                    </Box>
                    <Box
                      sx={
                        theme.custom.pokemonsEvolutionsImageAndNameContainers.sx
                      }
                    >
                      {secondPokemonEvolutionName && (
                        <div className={classes.EvolutionImageContainer}>
                          <img
                            className={classes.evolutionImages}
                            component="img"
                            height="140"
                            width="300px"
                            src={secondPokemonEvolutionImage}
                            alt="green iguana"
                          />
                        </div>
                      )}
                      <Typography
                        style={theme.custom.secondEvolutionsName}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <strong>{secondPokemonEvolutionName}</strong>
                      </Typography>
                    </Box>
                    <Box
                      sx={
                        theme.custom.pokemonsEvolutionsImageAndNameContainers.sx
                      }
                    >
                      {thirdPokemonEvolutionName && (
                        <div className={classes.EvolutionImageContainer}>
                          <img
                            className={classes.evolutionImages}
                            component="img"
                            height="140"
                            width="300px"
                            src={thirdPokemonEvolutionImage}
                            alt="green iguana"
                          />
                        </div>
                      )}
                      <Typography
                        style={theme.custom.thirdEvolutionsName}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <strong> {thirdPokemonEvolutionName}</strong>
                      </Typography>{" "}
                    </Box>
                  </div>
                </div>
              )}
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
