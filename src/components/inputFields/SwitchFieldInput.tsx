import { FormControlLabel, Switch } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IField } from "../../interfaces/IField";

export const SwitchFieldInput: FC<IField> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormControlLabel
            label={label}
            control={
              <Switch value={field.value} onChange={(e) => field.onChange(e)} />
            }
          />
        </>
      )}
    />
  );
};
