import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";

const VisuallyHiddenInput = styled("input")({
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

export interface IUploadBtnProps {
  name: string;
}

export const UploadBtn: FC<IUploadBtnProps> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Загрузите аватар
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <VisuallyHiddenInput
            type="file"
            value={field.value !== undefined? field.value : ''}
            onChange={(e) => field.onChange(e)}
            multiple
          />
        )}
      />
    </Button>
  );
};
