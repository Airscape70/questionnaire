import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fullNameValidation } from "../validation";
import { Link, useNavigate } from "react-router-dom";
import { IRegister } from "../../../interfaces/IRegister";
import { StyledBox } from "./registerStyles";
import { StyledContainer } from "../authStyles";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

export default function Register() {
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<IRegister>({mode: "onBlur"});

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(data);
    navigate('/auth/login')
    reset();
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Регистрация
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={linkStyle}>
        <Controller
          control={control}
          name="login"
          rules={{ required: "Обязательно для заполнения!" }}
          render={({ field }) => (
            <TextField
              label="Логин"
              placeholder="Придумайте ваш логин"
              type="tel"
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
          rules={{ required: "Обязательно для заполнения!" }}
          render={({ field }) => (
            <TextField
              label="Пароль"
              placeholder="Придумайте пароль"
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

        <Controller
          control={control}
          name="phoneNumber"
          rules={{ required: "Обязательно для заполнения!" }}
          render={({ field }) => (
            <TextField
              label="Номер телефона"
              type="tel"
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.phoneNumber?.message}
              helperText={errors.phoneNumber?.message}
            ></TextField>
          )}
        />

        <Controller
          control={control}
          name="fullName"
          rules={fullNameValidation}
          render={({ field }) => (
            <TextField
              label="ФИО"
              type="text"
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.fullName?.message}
              helperText={errors.fullName?.message}
            ></TextField>
          )}
        />

        <Controller
          control={control}
          name="gender"
          rules={{ required: "Обязательно для заполнения!" }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="gender" size="small">
                Пол
              </InputLabel>
              <Select
                size="small"
                labelId="gender"
                label="gender"
                value={field.value}
                onChange={(e) => field.onChange(e)}
                error={!!errors.gender?.message}
              >
                <MenuItem value={"Male"}>Мужской</MenuItem>
                <MenuItem value={"Female"}>Женский</MenuItem>
              </Select>
            </FormControl>
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

      <StyledBox>
        <Typography component="span" padding={0}>
          Уже есть аккаунт?
        </Typography>
        <Typography component="span" padding={0}>
          <Link to="/auth/login">Войти</Link>
        </Typography>
      </StyledBox>
    </StyledContainer>
  );
}
