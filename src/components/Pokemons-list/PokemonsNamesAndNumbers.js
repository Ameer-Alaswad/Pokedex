import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

export default function PokemonsNamesAndNumbers({
  pokemonName,
  pokemonNumber,
}) {
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
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <Card sx={{ maxWidth: 345, minWidth: 400 }}>
      <CardActionArea>
        {data?.map((info, i) => {
          if (pokemonName === info.name) {
            return (
              <CardMedia
                key={i}
                component="img"
                height="140"
                image={info.sprites.front_default}
                alt="green iguana"
              />
            );
          }
          return "she";
        })}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pokemonNumber}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
