import { Button, Typography } from "@mui/material";
import { StyledContainer } from "../authStyles/authStyles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CSSProperties } from "styled-components";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import { phoneNumberValidation } from "../../../constants/validations";
import { IUser } from "../../../interfaces/IAuth";
import { useNavigate } from "react-router-dom";
import { useStoreUser } from "../../../store/store";

const linkStyle: CSSProperties = {
  maxWidth: "360px",
};

export default function RemindPassword() {
  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });
  const users = useStoreUser((state) => state.users);
  

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(users)
    const user = users?.find((u) => u.phoneNumber === data.phoneNumber);
    if (!user) {
      alert("Пользователь с данным номером не зарегистрирован");
    } else {
      alert(`Ваш пароль: ${user.password}`);
      navigate("/auth/login");
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Введите ваш номер телефона
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={linkStyle}>
          <TextFieldInput
            name="phoneNumber"
            label="Номер телефона"
            type="tel"
            rules={phoneNumberValidation}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 2 }}
          >
            Показать пароль
          </Button>
        </form>
      </FormProvider>
    </StyledContainer>
  );
}
