import { useState } from "react";
import Container from "@mui/material/Container";
import { useStyles, theme } from "./pokemonListStyles";
import { ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import LoadMoreButton from "./LoadMoreButton";
import Footer from "../Footer";
import PokemonCardData from "./pokemon-card-data/PokemonCardData";
import { fetchPokemons } from "../fetchData";
const PokemonsList = () => {
  const classes = useStyles();
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState(24);
  const [loadPokemonsButtonVisibility, setLoadPokemonsButtonVisibility] =
    useState(true);

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

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={theme.custom.containerOfPokemonsListContainer}
        sx={theme.custom.containerOfPokemonsListContainer.sx}
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
              <PokemonCardData
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
      <Footer />
    </ThemeProvider>
  );
};
export default PokemonsList;
