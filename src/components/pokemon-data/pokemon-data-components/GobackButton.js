import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { MINE_SHAFT } from "../../../default-colors/colors";

export default function GoBackButton() {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/">
        <Button
          data-test-id="go back"
          style={{ backgroundColor: MINE_SHAFT, marginBottom: "13px" }}
          variant="contained"
        >
          Go back!
        </Button>
      </Link>
    </Stack>
  );
}
