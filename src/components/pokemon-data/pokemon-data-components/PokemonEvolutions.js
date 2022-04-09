import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles, theme } from "../pokemonDataStyles";

const PokemonEvolutions = ({
  //   newImages,
  firstPokemonEvolutionName,
  secondPokemonEvolutionName,
  secondPokemonEvolutionImage,
  thirdPokemonEvolutionName,
  thirdPokemonEvolutionImage,
  firstPokemonEvolutionImage,
}) => {
  let allEvolutionImages = [
    firstPokemonEvolutionImage,
    secondPokemonEvolutionImage,
    thirdPokemonEvolutionImage,
  ];

  const pokemonsImagesFilteredFromUndefinedGenerator = (allEvolutionImages) => {
    return allEvolutionImages.filter((allEvolutionImages) => {
      return allEvolutionImages !== undefined;
    });
  };
  const newImages =
    pokemonsImagesFilteredFromUndefinedGenerator(allEvolutionImages);
  const classes = useStyles();
  return (
    <div>
      {newImages.length !== 1 && (
        <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>Evolutions</strong>
          </Typography>
          <div className={classes.evolutionImagesAndNamesContainer}>
            <Box sx={theme.custom.pokemonsEvolutionsImageAndNameContainers.sx}>
              {newImages.length !== 1 && (
                <div className={classes.EvolutionImageContainer}>
                  <img
                    className={classes.evolutionImages}
                    component="img"
                    height="140"
                    src={newImages?.[0]}
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
            <Box sx={theme.custom.pokemonsEvolutionsImageAndNameContainers.sx}>
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
            <Box sx={theme.custom.pokemonsEvolutionsImageAndNameContainers.sx}>
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
    </div>
  );
};

export default PokemonEvolutions;
