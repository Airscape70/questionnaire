import { CSSProperties } from "styled-components";
import { Button, Typography } from "@mui/material";
import { FC } from "react";

export const formStyle: CSSProperties = {
  maxWidth: "360px",
};

interface IMainButton {
  type: "button" | "reset" | "submit";
  title: string;
}

export const MainButton: FC<IMainButton> = ({ title, type }) => {
  return (
    <Button
      type={type}
      variant="contained"
      fullWidth={true}
      disableElevation={true}
      sx={{ mt: 2 }}
    >
      {title}
    </Button>
  );
};

export const MainHeading = ({title}: {title: string}) => {
  return (
    <Typography variant="h4" component="div" gutterBottom={true}>
      {title}
    </Typography>
  );
};

export const MainSpan = ({title}: {title: string}) => {
  return (
    <Typography component="span" padding={0}>
      {title}
    </Typography>
  );
};
