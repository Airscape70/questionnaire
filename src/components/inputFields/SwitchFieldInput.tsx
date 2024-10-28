import { FormControlLabel, Switch } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ValidationRules } from "../../interfaces/IAuth";

export interface SwitchFieldInputProps {
  name: string;
  options: string[];
  label: string;
  errorMessage?: string;
  rules?: ValidationRules;
}

export const SwitchFieldInput: FC<SwitchFieldInputProps> = ({
  name,
  label,
  options,
  rules,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Switch
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
              }
              label={option}
            />
          ))}
        </>
      )}
    />
  );
};
