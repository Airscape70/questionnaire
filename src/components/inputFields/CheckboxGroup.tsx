import {
  Box,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ValidationRules } from "../../interfaces/IAuth";
import { REQUIRED_FIELD } from "../../constants/validations";
import { CheckboxFieldInput } from "./CheckboxFieldInput";

export interface CheckboxGroupProps {
  name: string;
  label: string;
  options: string[];
  rules?: ValidationRules;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  label,
  options
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ border: "1px solid black", padding: "20px" }}>
      <Typography variant="h5"> {label} </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {options.map((opt, index) => 
                  <CheckboxFieldInput {...field} key={index} name={opt} label={opt}/>
                  )}
          </>
        )}
      />
    </Box>
  );
};
