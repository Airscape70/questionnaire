import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoginContainer } from "./loginStyles";
import { CSSProperties } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fullNameValidation } from "../validation";
import { Link } from "react-router-dom";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

interface ISignInForm {
  login: string;
  password: string;
}

export default function Login() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors  },
  } = useForm<ISignInForm>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <LoginContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
      </Typography>

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

      <Box
        width={"360px"}
        display={"flex"}
        gap={2}
        fontSize={8}
        margin={"10px 0 0"}
        justifyContent={'space-between'}
      >
        <Typography component="span" padding={0}>
          Нет аккаунта?
        </Typography>
        <Typography component="span" padding={0}>
          <Link to='/auth/register'>Зарегистрироваться</Link>
        </Typography>
      </Box>
    </LoginContainer>
  );
}
