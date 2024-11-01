import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreUser } from "../store/store";
import { StyledBox, StyledContainer } from "./pagesStyles/authStyles";
import { TEXT_FIELDS } from "../constants/fieldsConstants";
import { GeneralForm } from "../components/form/GeneralForm";
import { ILogin } from "../interfaces/IAuth";

export default function LoginPage() {
  const [remindBtn, setRemindLink] = useState<boolean>(false);
  const login = useStoreUser((state) => state.login);
  const users = useStoreUser((state) => state.users);
  const fields = TEXT_FIELDS.filter((field) => field.isLoginField);

  const onSubmit = async (data: ILogin) => {
    login(data);
    setRemindLink(true);
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
      </Typography>

      <GeneralForm onSubmit={onSubmit} fields={fields} buttonTitle="Войти" />

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
