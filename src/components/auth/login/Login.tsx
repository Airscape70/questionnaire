import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  formStyle,
  StyledBox,
  StyledContainer,
} from "../authStyles/authStyles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import { ILogin } from "../../../interfaces/IAuth";
import { useEffect, useState } from "react";
import { useStoreUser } from "../../../store/store";
import { emailValidation, passwordValidation } from "../validations";

export default function Login() {
  const [remindBtn, setRemindLink] = useState<boolean>(false);
  const methods = useForm<ILogin>({ mode: "onBlur" });

  const login = useStoreUser((state) => state.login);
  const getUsers = useStoreUser((state) => state.getUsers);
  const users = useStoreUser((state) => state.users);

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    login(data);
    setRemindLink(true)
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
          <TextFieldInput
            name="email"
            label="Почта"
            type="email"
            rules={emailValidation}
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

      {remindBtn && <Link to="/reminder">Забыли пароль?</Link>}

      <StyledBox>
        <Typography component="span" padding={0}>
          Нет аккаунта?
        </Typography>

        <Typography component="span" padding={0}>
          <Link to="/register">Зарегистрироваться</Link>
        </Typography>
      </StyledBox>
      <Typography component="div">
        {users?.length} зарегистрированных пользователей
      </Typography>
    </StyledContainer>
  );
}
