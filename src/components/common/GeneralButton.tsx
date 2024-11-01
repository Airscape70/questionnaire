import { Button } from "@mui/material";
import { FC } from "react";

interface IStyledButton {
  type: "button" | "reset" | "submit";
  title: string;
}

export const GeneralButton: FC<IStyledButton> = ({ title, type }) => {
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
