import { Button, TextField } from "@mui/material";
import { CSSProperties } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fullNameValidation } from "../auth/validation";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

export interface ISignInForm {
  login: string;
  password: string;
}

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignInForm>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={linkStyle}>
      <Controller
        control={control}
        name="login"
        rules={{ required: "Обязательно для заполнения!" }}
        render={({ field }) => (
          <TextField
            label="Логин"
            type="text"
            size="small"
            margin="normal"
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.login?.message}
            helperText={errors.login?.message}
          ></TextField>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={fullNameValidation}
        render={({ field }) => (
          <TextField
            label="Пароль"
            type="password"
            size="small"
            margin="normal"
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          ></TextField>
        )}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth={true}
        disableElevation={true}
        sx={{ mt: 2 }}
      >
        Войти
      </Button>
    </form>
  );
}
