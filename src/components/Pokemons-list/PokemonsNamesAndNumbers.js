import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PokemonsNamesAndNumbers({
  pokemonName,
  pokemonNumber,
}) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg"
          alt="green iguana"
        />
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
