import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ValidationRules } from "../../interfaces/IAuth";
import { FC } from "react";

export interface RadioFieldInputProps {
  name: string;
  label: string;
  options: string[];
  errorMessage?: string;
  rules?: ValidationRules;
}

export const RadioFieldInput: FC<RadioFieldInputProps> = ({
  name,
  label,
  options,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "Обязательно для заполнения!" }}
      render={({ field }) => (
        <Box sx={{ border: "1px solid black", padding: "20px" }}>
          <FormControl>
            <Typography variant="h5"> {label}</Typography>
            <RadioGroup name={name}>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio onChange={(e) => field.onChange(e)} />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      )}
    />
  );
};
