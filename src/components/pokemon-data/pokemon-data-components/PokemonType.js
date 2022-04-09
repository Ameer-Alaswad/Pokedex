import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { theme } from "../pokemonDataStyles";

const PokemonTpyes = ({ data }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <strong>Type:</strong>
      </Typography>
      {data?.[0].types.map((type, i) => {
        return (
          <Typography
            style={theme.custom.typesTypography}
            key={i}
            variant="h6"
            component="h2"
          >
            {type.type.name}
          </Typography>
        );
      })}
    </Box>
  );
};
export default PokemonTpyes;
