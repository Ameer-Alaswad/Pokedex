import { useState } from "react";
import PokemonsNamesAndNumbers from "./PokemonsNamesAndNumbers";
import Container from "@mui/material/Container";
import { useStyles, theme } from "./pokemonListStyles";
import { ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import axios from "axios";
//////////////////////////////////////////////
///////////////////////////////////////////////
const PokemonsList = () => {
  const classes = useStyles();
  const [page, setPage] = useState(50);
  async function fetchPokemons({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=" + queryKey[1] + "&offset=0"
    );
    return data;
  }
  const { data, error, isError, isLoading } = useQuery(
    ["posts", page],
    fetchPokemons,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  /////////////////////////////////////////////
  ///////////////////////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <Container
        className={classes.pokemonsListContainer}
        sx={theme.custom.pokemonsListContainer.sx}
      >
        {data.results?.map((data, i) => {
          let pokemonName = data.name;
          let pokemonUrl = data.url;
          let pokemonNumber = i + 1;
          return (
            <PokemonsNamesAndNumbers
              key={pokemonNumber}
              pokemonName={pokemonName}
              pokemonNumber={pokemonNumber}
              pokemonUrl={pokemonUrl}
            />
          );
        })}
        <button onClick={() => setPage(page + 50)}>next</button>
      </Container>
    </ThemeProvider>
  );
};
export default PokemonsList;
