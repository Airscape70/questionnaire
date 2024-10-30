import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IField } from "../../interfaces/IField";



export const SelectFieldInput: FC<IField> = ({
  name,
  options,
  label,
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
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id={name} size="small">
            {label}
          </InputLabel>
          <Select
            size="small"
            labelId={name}
            label={label}
            value={field.value !== undefined ? field.value : ""}
            onChange={(e) => field.onChange(e)}
            error={!!errors[name]?.message}
          >
            {options?.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
