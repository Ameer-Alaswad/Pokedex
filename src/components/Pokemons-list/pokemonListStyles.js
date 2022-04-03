import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const useStyles = makeStyles(() => ({
  pokemonsListContainer: {
    height: "100%",
    marginTop: "20px",
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
  },
});
