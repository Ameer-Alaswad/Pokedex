import * as React from "react";
import PokemonCard from "./PokemonCard";
import Container from "@mui/material/Container";
import { useStyles, theme } from "./pokemonListStyles";
import { ThemeProvider } from "@mui/material/styles";

const PokemonsList = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container
        className={classes.pokemonsListContainer}
        sx={theme.custom.pokemonsListContainer.sx}
      >
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </Container>
    </ThemeProvider>
  );
};
export default PokemonsList;
