import { Button, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { formStyle, StyledBox, StyledContainer } from "../authStyles/authStyles";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import { SelectFieldInput } from "../../inputFields/SelectFieldInput";
import { IUser } from "../../../interfaces/IAuth";
import { useStoreUser } from "../../../store/store";
import { emailValidation, fullNameValidation, loginValidation, passwordValidation, phoneNumberValidation, selectValidation } from "../validations";



export default function Register() {

  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });
  const postUser = useStoreUser((state) => state.postUser)


  const onSubmit: SubmitHandler<IUser> = (data) => {
    postUser(data)
    navigate("/home")
  };


  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Регистрация
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>

          <TextFieldInput
            name="login"
            label="Логин"
            type="text"
            rules={loginValidation}
          />

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
