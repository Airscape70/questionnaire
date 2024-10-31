import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IField } from "../../interfaces/IField";
import { REQUIRED_FIELD } from "../../constants/register";

export const TextFieldInput: FC<IField> = ({
  name,
  label,
  type,
  pattern,
  errorMessage,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const validation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
      if (!value.match(pattern!)) {
        return errorMessage;
      }
      return true;
    },
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
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
