import { Link, useNavigate } from "react-router-dom";
import { AuthBox, AuthContainer } from "./pagesStyles/authStyles";
import { IUser } from "../interfaces/IAuth";
import { useStoreUser } from "../store/store";
import { SELECT_FIELD, TEXT_FIELDS } from "../constants/fieldsConstants";
import { GeneralForm } from "../components/form/GeneralForm";
import { formStyle, MainHeading, MainSpan } from "../styles";
import { HOME } from "../constants/navigateContants";

export default function RegisterPage() {
  const navigate = useNavigate();
  const postUser = useStoreUser((state) => state.setUser);
  const fields = TEXT_FIELDS.concat(SELECT_FIELD);

  const onSubmit = (data: IUser) => {
    postUser(data);
    navigate(HOME);
  };

  return (
    <AuthContainer>
      <MainHeading title="Регистрация" />

      <GeneralForm
        onSubmit={onSubmit}
        fields={fields}
        buttonTitle="Зарегистрироваться"
        styles={formStyle}
      />

      <AuthBox>
        <MainSpan title="Уже есть аккаунт?" />
        <Link to="/login">
          <MainSpan title="Войти" />
        </Link>
      </AuthBox>
    </AuthContainer>
  );
}
