import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";
import { VisuallyHiddenInput } from "./fieldStyles/fieldStyles";
import { IField } from "../../../interfaces/IField";

export const UploadBtn: FC<IField> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{width: "100%"}}
    >
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <VisuallyHiddenInput
            type="file"
            value={field.value !== undefined ? field.value : ""}
            onChange={(e) => field.onChange(e)}
            multiple
          />
        )}
      />
    </Button>
  );
};
