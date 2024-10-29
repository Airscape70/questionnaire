import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer, StyledLoginBox } from "../authStyles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CSSProperties } from "styled-components";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import {
  loginValidation,
  passwordValidation,
} from "../../../constants/validations";
import { ILogin } from "../../../interfaces/IAuth";
import { login } from "../../../api/localApi";
import { useState } from "react";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

export default function Login() {
  const navigate = useNavigate()
  const [remindBtn, setRemindLink] = useState<boolean>(false);
  const methods = useForm<ILogin>({ mode: "onBlur" });

  const  onSubmit: SubmitHandler<ILogin> = (data) => {
    const user = login(data);
    methods.reset();
    console.log(user)
    if (!user) {
      alert("Не правильный логин или пароль");
      setRemindLink(!remindBtn);
    } else {
      alert(`Привет ${user.fullName}`)
      navigate('/')
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
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
      </FormProvider>

      { remindBtn && <Link to="/auth/reminder">Забыли пароль?</Link> }

      <StyledLoginBox>
        <Typography component="span" padding={0}>
          Нет аккаунта?
        </Typography>

        <Typography component="span" padding={0}>
          <Link to="/auth/register">Зарегистрироваться</Link>
        </Typography>
      </StyledLoginBox>
    </StyledContainer>
  );
}
