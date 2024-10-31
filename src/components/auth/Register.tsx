import { Button, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IAuth";
import { useStoreUser } from "../../store/store";
import { formStyle, StyledBox, StyledContainer } from "./authStyles/authStyles";
import { REGISTER_TEXT_FIELDS } from "../../constants/register";
import { TextFieldInput } from "../inputFields/TextFieldInput";
import { SelectFieldInput } from "../inputFields/SelectFieldInput";


export default function Register() {
  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });
  const postUser = useStoreUser((state) => state.postUser);

  const onSubmit: SubmitHandler<IUser> = (data) => {
    postUser(data);
    navigate("/home");
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Регистрация
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
          {REGISTER_TEXT_FIELDS.map((f) => (
            <TextFieldInput
              key={f.name}
              name={f.name}
              label={f.label}
              type={f.type}
              pattern={f.pattern}
              errorMessage={f.errorMessage}
            />
          ))}

          <SelectFieldInput
            name="gender"
            label="Пол"
            options={[
              { label: "Мужской", value: "Мужской" },
              { label: "Женский", value: "Женский" },
            ]}
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
