import { useState } from "react";
import PokemonsNamesAndNumbers from "./PokemonsNamesAndNumbers";
import Container from "@mui/material/Container";
import { useStyles, theme } from "../styles/pokemonListStyles";
import { ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import LoadMoreButton from "./LoadMoreButton";
import axios from "axios";
//////////////////////////////////////////////
///////////////////////////////////////////////
const PokemonsList = () => {
  const classes = useStyles();
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState(24);
  const [loadPokemonsButtonVisibility, setLoadPokemonsButtonVisibility] =
    useState(true);
  async function fetchPokemons({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=" + queryKey[1] + "&offset=0"
    );
    return data;
  }
  const { data, error, isError, isLoading } = useQuery(
    ["posts", pokemonsDisplayed],
    fetchPokemons,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error! {error.message}</div>;

  const handleLoadMorePokemons = () => {
    data.next === null
      ? setLoadPokemonsButtonVisibility(false)
      : setPokemonsDisplayed(pokemonsDisplayed + 24);
  };
  /////////////////////////////////////////////
  ///////////////////////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{ backgroundColor: "#424242", marginTop: "50px" }}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container
          className={classes.pokemonsListContainer}
          sx={theme.custom.pokemonsListContainer.sx}
        >
          {data?.results?.map((data, i) => {
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
        </Container>
        {loadPokemonsButtonVisibility && (
          <LoadMoreButton handleLoadMorePokemons={handleLoadMorePokemons} />
        )}
      </Container>
    </ThemeProvider>
  );
};
export default PokemonsList;
