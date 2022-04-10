import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LoadMoreButton({ handleLoadMorePokemons }) {
  const loadMoreStyle = { backgroundColor: "#30a7d7", marginBottom: "20px" };
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={handleLoadMorePokemons}
        style={loadMoreStyle}
        variant="contained"
      >
        Load more!!
      </Button>
    </Stack>
  );
}
