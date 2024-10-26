import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledContainer } from "../authStyles";
import LoginForm from "../../forms/LoginForm";
import { StyledLoginBox } from "./loginStyles";

export default function Login() {
  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Войти
      </Typography>

      <LoginForm />

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
