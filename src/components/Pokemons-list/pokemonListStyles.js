import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const useStyles = makeStyles(() => ({
  pokemonsListContainer: {
    height: "100%",
    marginTop: "40px",
  },
}));

export const theme = createTheme({
  custom: {
    pokemonsListContainer: {
      sx: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      },
    },
    containerOfPokemonsListContainer: {
      sx: { display: "flex", flexDirection: "column", alignItems: "center" },
      backgroundColor: "#424242",
      marginTop: "50px",
    },
  },
});
