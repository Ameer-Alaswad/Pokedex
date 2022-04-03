import { useEffect, useState } from "react";
import PokemonsNamesAndNumbers from "./PokemonsNamesAndNumbers";
import Container from "@mui/material/Container";
import { useStyles, theme } from "./pokemonListStyles";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const PokemonsList = () => {
  const [pokemonsData, setPokemonData] = useState([]);
  const getData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonData(response.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container
        className={classes.pokemonsListContainer}
        sx={theme.custom.pokemonsListContainer.sx}
      >
        <PokemonsNamesAndNumbers pokemonsData={pokemonsData} />
      </Container>
    </ThemeProvider>
  );
};
export default PokemonsList;
