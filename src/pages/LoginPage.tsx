import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreUser } from "../store/store";
import { AuthBox, AuthContainer } from "./pagesStyles/authStyles";
import { TEXT_FIELDS } from "../constants/fieldsConstants";
import { GeneralForm } from "../components/form/GeneralForm";
import { ILogin } from "../interfaces/IAuth";
import { formStyle, MainHeading, MainSpan } from "../styles";

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
    <AuthContainer>
      <MainHeading title="Войти" />
      <GeneralForm
        onSubmit={onSubmit}
        fields={fields}
        buttonTitle="Войти"
        styles={formStyle}
      />

      {remindBtn && <Link to="/reminder">Забыли пароль?</Link>}

      <AuthBox>
        <MainSpan title="Нет аккаунта?" />
        <Link to="/register">
          <MainSpan title="Зарегистрироваться" />
        </Link>
      </AuthBox>

      <Typography component="div" margin={5}>
        Уже {users?.length} зарегистрированных пользователей
      </Typography>
    </AuthContainer>
  );
}
