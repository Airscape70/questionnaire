import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ILogin } from "../../interfaces/IAuth";
import { REGISTER_TEXT_FIELDS } from "../../constants/register";
import { useStoreUser } from "../../store/store";
import { formStyle, StyledBox, StyledContainer } from "./authStyles/authStyles";
import { TextFieldInput } from "../inputFields/TextFieldInput";

export default function Login() {
  const [remindBtn, setRemindLink] = useState<boolean>(false);
  const methods = useForm<ILogin>({ mode: "onBlur" });
  const loginFields = REGISTER_TEXT_FIELDS.filter(
    (f) => f.name === "email" || f.name === "password"
  );

  const login = useStoreUser((state) => state.login);
  const getUsers = useStoreUser((state) => state.getUsers);
  const users = useStoreUser((state) => state.users);

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    login(data);
    setRemindLink(true);
  };

  useEffect(() => {
    getUsers();  }, [getUsers]);

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
          {loginFields.map((f) => (
            <TextFieldInput
              key={f.name}
              name={f.name}
              label={f.label}
              type={f.type}
              pattern={f.pattern}
              errorMessage={f.errorMessage}
            />
          ))}

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
      <Typography component="div" margin={5}>
        Уже {users?.length} зарегистрированных пользователей
      </Typography>
    </StyledContainer>
  );
}
