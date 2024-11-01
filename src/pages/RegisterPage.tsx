import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { StyledBox, StyledContainer } from "./pagesStyles/authStyles";
import { IUser } from "../interfaces/IAuth";
import { useStoreUser } from "../store/store";
import { SELECT_FIELD, TEXT_FIELDS } from "../constants/fieldsConstants";
import { GeneralForm } from "../components/form/GeneralForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  const postUser = useStoreUser((state) => state.setUser);
  const fields = TEXT_FIELDS.concat(SELECT_FIELD);

  const onSubmit = (data: IUser) => {
    postUser(data);
    navigate("/home");
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Регистрация
      </Typography>

      <GeneralForm
        onSubmit={onSubmit}
        fields={fields}
        buttonTitle="Зарегистрироваться"
      />

      <StyledBox>
        <Typography component="span" padding={0}>
          Уже есть аккаунт?
        </Typography>

        <Typography component="span" padding={0}>
          <Link to="/login">Войти</Link>
        </Typography>
      </StyledBox>
    </StyledContainer>
  );
}
