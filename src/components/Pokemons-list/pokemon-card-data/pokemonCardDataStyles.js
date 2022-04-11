import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  custom: {
    cardContainer: {
      marginBottom: "30px",
      width: "250px",
      height: "300px",
      borderRadius: "30px",
      sx: { maxWidth: 345, minWidth: 200 },
    },
    pokemonImage: {
      objectFit: "contain",
      margin: "0 auto",
      marginTop: "20px",
      height: "210px",
      width: "240px",
    },
    pokemonNameAndNumberContainer: { marginTop: "15px", display: "flex" },
  },
});
