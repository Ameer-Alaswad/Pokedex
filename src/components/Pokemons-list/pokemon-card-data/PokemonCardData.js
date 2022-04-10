import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { theme } from "./pokemonCardDataStyles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PokemonCardData({ pokemonName, pokemonNumber }) {
  async function fetchImages({ queryKey }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + queryKey[1]
    );
    return [data];
  }
  const { data, error, isError, isLoading } = useQuery(
    ["posts", pokemonName],
    fetchImages,
    {
      keepPreviousData: true,
    }
  );

  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  return (
    <Card style={theme.custom.cardContainer} sx={theme.custom.cardContainer.sx}>
      {data?.map((info, i) => {
        const pokemonImage = info?.sprites.other.dream_world.front_default;
        if (pokemonName === info.name) {
          return (
            <Link
              key={i}
              to={"/pokemon/" + info.name}
              params={{ pokemonName: info.name }}
            >
              <CardMedia
                style={theme.custom.pokemonImage}
                component="img"
                height="140"
                image={pokemonImage}
                alt="green iguana"
              />
            </Link>
          );
        }
        return null;
      })}

      <CardContent
        style={theme.custom.pokemonNameAndNumberContainer}
        sx={theme.custom.pokemonNameAndNumberContainer.sx}
      >
        <Typography
          style={{ fontFamily: "'Century Gothic', sans-serif" }}
          data-user="123"
          gutterBottom
          variant="h5"
          component="div"
        >
          {pokemonName.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemonNumber}
          {}
        </Typography>
      </CardContent>
    </Card>
  );
}
