import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Box)({
  width: "50vw",
  height: "100vh",
  backgroundColor: "#fff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const StyledLoginBox = styled(Box)({
  width: "360px",
  display: "flex",
  gap: 2,
  fontSize: 8,
  margin: "10px 0 0",
  justifyContent: "space-between",
});

export const StyledRegisterBox = styled(Box)({
  width: "360px",
  display: "flex",
  gap: 2,
  fontSize: 8,
  margin: "10px 0 0",
  justifyContent: "space-between",
});
