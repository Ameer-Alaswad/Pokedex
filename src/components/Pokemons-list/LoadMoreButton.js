import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LoadMoreButton({ handleLoadMorePokemons }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={handleLoadMorePokemons}
        style={{ backgroundColor: "#30a7d7", marginBottom: "20px" }}
        variant="contained"
      >
        Load more!!
      </Button>
    </Stack>
  );
}
