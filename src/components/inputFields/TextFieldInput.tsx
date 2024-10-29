import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type ValidationRules = {
  required: string;
  validate: (value: string) => boolean | string;
};

export interface TextFieldInputProps {
  name: string;
  label: string;
  errorMessage?: string;
  type: "text" | "password" | "email" | "tel";
  rules?: ValidationRules;
}

export const TextFieldInput: FC<TextFieldInputProps> = ({
  name,
  label,
  type,
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
        <TextField
          label={label}
          autoComplete={type}
          type={type}
          size="small"
          margin="normal"
          fullWidth={true}
          onChange={(e) => {
            field.onChange(e);
          }}
          value={field.value !== undefined ? field.value : ""}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message?.toString()}
        />
      )}
    />
  );
};
