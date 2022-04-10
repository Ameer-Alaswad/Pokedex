import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function GoBackButton() {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/">
        <Button style={{ backgroundColor: "#313131" }} variant="contained">
          Go back!
        </Button>
      </Link>
    </Stack>
  );
}
