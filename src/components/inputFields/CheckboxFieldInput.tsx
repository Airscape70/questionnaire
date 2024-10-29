import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface CheckboxFieldInputProps {
  value: string;
  label: string;
  ref: null;
}

export const CheckboxFieldInput: FC<CheckboxFieldInputProps> = ({
  value,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          control={control}
          name={value}
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
