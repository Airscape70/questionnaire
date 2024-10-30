import { FormControlLabel, Switch } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IField } from "../../interfaces/IField";

export const SwitchFieldInput: FC<IField> = ({ name, options, rules }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <>
          {options?.map((option, index) => (
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
