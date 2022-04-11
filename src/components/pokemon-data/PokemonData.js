import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { modalContainerResponsive, theme } from "./pokemonDataStyles";
import { ThemeProvider } from "@mui/material/styles";
import PokemonEvolutions from "./pokemon-data-components/PokemonEvolutions";
import PokemonTpyes from "./pokemon-data-components/PokemonType";
import PokemonStatsAndImageAndName from "./pokemon-data-components/PokemonStatsAndImageAndName";
import GoBackButton from "./pokemon-data-components/GobackButton";

import usePokemonDataFetch from "../../Hooks/usePokemonDataFetch";
import { useHandleErrors } from "../../Hooks/useHandleErrors";
import { useHandleLoader } from "../../Hooks/useHandleLoader";
export default function PokemonData() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const {
    data,
    firstPokemonEvolutionImage,
    secondPokemonEvolutionImage,
    thirdPokemonEvolutionImage,
    firstPokemonEvolutionName,
    secondPokemonEvolutionName,
    thirdPokemonEvolutionName,
    id,
  } = usePokemonDataFetch();
  const { error } = useHandleErrors();
  const { loading } = useHandleLoader();

  const pokemonEvolutionData = {
    firstPokemonEvolutionImage: firstPokemonEvolutionImage,
    firstPokemonEvolutionName: firstPokemonEvolutionName,
    secondPokemonEvolutionName: secondPokemonEvolutionName,
    secondPokemonEvolutionImage: secondPokemonEvolutionImage,
    thirdPokemonEvolutionName: thirdPokemonEvolutionName,
    thirdPokemonEvolutionImage: thirdPokemonEvolutionImage,
  };
  return (
    <div>
      {error}
      {loading}
      <Button onClick={handleOpen}></Button>
      <ThemeProvider theme={theme}>
        <Modal
          style={{ zIndex: "10" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={modalContainerResponsive}
            style={theme.custom.pokemonModalContainer}
          >
            <Box
              style={{ height: "100%" }}
              sx={theme.custom.pokemonsDataContainer.sx}
            >
              <GoBackButton />
              {/* ///////////// stats, image and name/////////////// */}
              <PokemonStatsAndImageAndName data={data} id={id} />
              {/* ///////////// types/////////////// */}
              <PokemonTpyes data={data} />
              {/* ///////////// evolution/////////////// */}
              <PokemonEvolutions {...pokemonEvolutionData} />
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
