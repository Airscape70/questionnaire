import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IField } from "../../interfaces/IField";

export const CheckboxGroup: FC<IField> = ({ name, label, options }) => {
  const { register, control } = useFormContext();
  const { ref, ...rest } = register(name);

  return (
    <Box sx={{ border: "1px solid black", padding: "20px" }}>
      <Typography variant="h5"> {label} </Typography>
      <Controller
        control={control}
        rules={{ required: true }}
        name={name}
        render={({ field }) => (
          <FormGroup>
            {options?.map((opt, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox {...rest} inputRef={ref} />}
                value={opt}
                label={opt}
              />
            ))}
          </FormGroup>
        )}
      />
    </Box>
  );
};
