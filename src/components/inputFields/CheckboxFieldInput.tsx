import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface CheckboxFieldInputProps {
  name: string;
  label: string;
}

export const CheckboxFieldInput: FC<CheckboxFieldInputProps> = ({
  name,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Checkbox
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
          )}
        />
      }
    />
  );
};

