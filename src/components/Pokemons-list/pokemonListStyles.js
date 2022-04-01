import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const useStyles = makeStyles(() => ({
  pokemonsListContainer: {
    height: "100%",
  },
}));

export const theme = createTheme({
  custom: {
    pokemonsListContainer: {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      },
    },
  },
});
