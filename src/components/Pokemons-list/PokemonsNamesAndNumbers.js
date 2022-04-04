import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
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

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      {data?.map((info, i) => {
        if (pokemonName === info.name) {
          return (
            <Link key={i} to={"/pokemon/" + info.name}>
              <CardMedia
                component="img"
                height="140"
                image={info.sprites.front_default}
                alt="green iguana"
              />
            </Link>
          );
        }
        return "she";
      })}
      <CardContent>
        <Typography data-user="123" gutterBottom variant="h5" component="div">
          {pokemonName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemonNumber}
          {}
        </Typography>
      </CardContent>
    </Card>
  );
}
