import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { theme } from "../pokemonDataStyles";

const PokemonTpyes = ({ data }) => {
  let pokemonTypes = data?.[0].types.map((type, i) => {
    return type.type.name;
  });
  return (
    <Box sx={{ display: "flex" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <strong>{pokemonTypes.length > 1 ? "Types:" : "Type:"}</strong>
      </Typography>
      {pokemonTypes.map((type, i) => {
        return (
          <Typography
            style={theme.custom.typesTypography}
            key={i}
            variant="h6"
            component="h2"
          >
            {type}
          </Typography>
        );
      })}
    </Box>
  );
};
export default PokemonTpyes;
