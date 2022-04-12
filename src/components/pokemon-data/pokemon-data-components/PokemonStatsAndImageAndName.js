import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles, theme } from "../pokemonDataStyles";

const PokemonStatsAndImageAndName = ({ data, id }) => {
  const classes = useStyles();
  const pokemonImage = data?.[0].sprites.other.dream_world.front_default;
  return (
    <div className={classes.pokemonNameAndStatsComponent}>
      {/* ///////////// stats, image and/////////////// */}
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
                className={classes.containerOfParagraphsOfPokemonStats}
                key={i}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <h1 className={classes.typeParagraphInPokemonStats}>
                  {stat.stat.name.toUpperCase()} :
                </h1>
                <span className={classes.statsNumbersParagraph}>
                  {stat.base_stat}
                </span>
              </div>
            );
          })}
        </Box>
      </div>

      <Box style={{ width: "250px" }} sx={theme.custom.pokemonImageAndName.sx}>
        <h3 className={classes.pokemonName}>{id?.toUpperCase()}</h3>
        <div className={classes.pokemonImageContainer}>
          <img
            className={classes.pokemonImage}
            src={pokemonImage}
            alt="green iguana"
          />
        </div>
      </Box>
    </div>
  );
};

export default PokemonStatsAndImageAndName;
