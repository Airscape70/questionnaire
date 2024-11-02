import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DndBoxStyled = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "30px"
});

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
