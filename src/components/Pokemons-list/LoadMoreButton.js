import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CURIOUS_BLUE } from "../../default-colors/colors";

export default function LoadMoreButton({ handleLoadMorePokemons }) {
  const loadMoreStyle = { backgroundColor: CURIOUS_BLUE, marginBottom: "20px" };
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
