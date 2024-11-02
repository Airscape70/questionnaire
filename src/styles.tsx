import { CSSProperties } from "styled-components";
import { Button, Typography } from "@mui/material";
import { FC } from "react";

export const formStyle: CSSProperties = {
  maxWidth: "360px",
};

interface IMainButton {
  type: "button" | "reset" | "submit";
  title: string;
  handler?: () => void;
  fullWidth?: boolean;
}

export const MainButton: FC<IMainButton> = ({
  title,
  type,
  handler,
  fullWidth = true,
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      fullWidth={fullWidth}
      disableElevation={true}
      onClick={handler}
      sx={{ mt: "10px" }}
    >
      {title}
    </Button>
  );
};

export const MainHeading = ({ title }: { title: string }) => {
  return (
    <Typography variant="h4" component="div" gutterBottom={true}>
      {title}
    </Typography>
  );
};

export const SubHeading = ({ title }: { title: string }) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {title}
    </Typography>
  );
};

export const MainSpan = ({ title }: { title: string }) => {
  return (
    <Typography component="span" padding={0}>
      {title}
    </Typography>
  );
};
