import { Button, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer, StyledRegisterBox } from "../authStyles";
import {
  fullNameValidation,
  loginValidation,
  passwordValidation,
  phoneNumberValidation,
  selectValidation,
} from "../../../constants/validations";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import { SelectFieldInput } from "../../inputFields/SelectFieldInput";
import { IUser } from "../../../interfaces/IAuth";
import { register } from "../../../api/localApi";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

export default function Register() {
  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    register(data)
    navigate("/auth/login");
    methods.reset();
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Регистрация
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={linkStyle}>
          <TextFieldInput
            name="login"
            label="Логин"
            type="text"
            rules={loginValidation}
          />

          <TextFieldInput
            name="password"
            label="Пароль"
            type="password"
            rules={passwordValidation}
          />

          <TextFieldInput
            name="phoneNumber"
            label="Номер телефона"
            type="tel"
            rules={phoneNumberValidation}
          />

          <TextFieldInput
            name="fullName"
            label="ФИО"
            type="text"
            rules={fullNameValidation}
          />

          <SelectFieldInput
            name="gender"
            options={["Мужской", "Женский"]}
            label="Пол"
            rules={selectValidation}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 2 }}
          >
            Зарегистрировать
          </Button>
        </form>
      </FormProvider>

      <StyledRegisterBox>
        <Typography component="span" padding={0}>
          Уже есть аккаунт?
        </Typography>

        <Typography component="span" padding={0}>
          <Link to="/auth/login">Войти</Link>
        </Typography>
      </StyledRegisterBox>
    </StyledContainer>
  );
}
