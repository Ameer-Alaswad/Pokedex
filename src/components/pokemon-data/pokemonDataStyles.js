import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import {
  GRAY_CHATEAU,
  CURIOUS_BLUE,
  WHITE_SOLID,
  BLACK_SOLID,
  ORANGE_SOLID,
} from "../../default-colors/colors";

export const modalContainerResponsive = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "68%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 700px)": {
    height: "80%",
  },
  "@media (max-width: 688px)": {
    height: "100%",
  },
};

export const useStyles = makeStyles(() => ({
  pokemonNameAndStatsComponent: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {},
    "@media (max-width: 700px)": {
      flexDirection: "column-reverse",
      alignItems: "center",

      fontSize: "15px",
      display: "flex",
    },
  },
  pokemonImageContainer: {
    width: "230px",
    backgroundColor: GRAY_CHATEAU,
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10% 25% ",

    "@media (max-width: 700px)": {
      marginBottom: "10PX",
    },
    "@media (max-width: 954px)": {
      marginLeft: "10PX",
    },
    "@media (max-width: 346px)": {
      width: "190px",
      marginRight: "25px",
    },
  },
  pokemonName: {
    fontFamily: "'Century Gothic', sans-serif",
    width: "100%",
    textAlign: "center",
    "@media (max-width: 346px)": {
      marginRight: "30px",
    },
  },
  pokemonImage: {
    objectFit: "contain",
    width: "195px",
    "@media (max-width: 700px)": {
      width: "140px",
      height: "170px",
    },
  },
  pokemonStatsHeadlineAndStatsContainer: {
    width: "420px",
    backgroundColor: CURIOUS_BLUE,
    borderRadius: " 10% / 50%",
    height: "300px",
    "@media (max-width: 700px)": {
      width: "270px",
      marginBottom: "10px",
    },
    "@media (max-width: 346px)": {
      width: "220px",
    },
  },
  containerOfParagraphsOfPokemonStats: {
    width: "300px",
    display: "flex",
    height: "23px",
    marginBottom: "14px",
    justifyContent: "space-between",
    "@media (max-width: 838px)": {
      justifyContent: "flex-start",
    },
  },
  typeParagraphInPokemonStats: {
    fontSize: "20px",
    backgroundColor: WHITE_SOLID,
    height: "35px",
    marginRight: "5px",
    borderRadius: "50% 20% / 10% 40%",
    fontFamily: "'Century Gothic', sans-serif",
    "@media (max-width: 346px)": {
      fontSize: "15px",
      height: "25px",
    },
  },
  statsNumbersParagraph: {
    fontSize: "20px",
    textAlign: "center",
    backgroundColor: BLACK_SOLID,
    color: WHITE_SOLID,
    height: "35px",
    width: "35px",
    marginTop: "12px",
    borderRadius: "50% 20% / 10% 40%",
    fontFamily: "'Century Gothic', sans-serif",
  },
  evolutionImagesAndNamesContainer: {
    display: "flex",
    justifyContent: "space-around",
    "@media (max-width: 687px)": {
      flexDirection: "column",
    },
  },
  EvolutionImageContainer: {
    width: "150px",
    backgroundColor: GRAY_CHATEAU,
    display: "flex",
    height: "185px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10% 25% ",
    "@media (max-width: 687px)": {
      width: "100px",
      height: "125px",
    },
  },
  evolutionImages: {
    objectFit: "contain",
    width: "140px",
    "@media (max-width: 687px)": {
      width: "90px",
      height: "125px",
    },
  },
}));

export const theme = createTheme({
  custom: {
    pokemonsEvolutionsImageAndNameContainers: {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    pokemonImageAndName: {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    pokemonsDataContainer: {
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },

    firstEvolutionsName: {
      fontFamily: "'Century Gothic', sans-serif",
    },
    thirdEvolutionsName: {
      fontFamily: "'Century Gothic', sans-serif",
    },
    secondEvolutionsName: {
      fontFamily: "'Century Gothic', sans-serif",
    },

    pokemonStatsContainer: {
      width: "200px",
      marginLeft: "40px",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "space-between",
        flexWrap: "wrap",
      },
    },

    typesTypography: {
      marginLeft: "10px",
      fontSize: "20px",
      backgroundColor: ORANGE_SOLID,
      width: "100px",
      textAlign: "center",
      height: "35px",
      fontWeight: "bold",
      borderRadius: "20px",
      fontFamily: "'Century Gothic', sans-serif",
    },
  },
});
