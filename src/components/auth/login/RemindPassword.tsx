import { Button, Typography } from "@mui/material";
import { formStyle, StyledContainer } from "../authStyles/authStyles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { TextFieldInput } from "../../inputFields/TextFieldInput";
import { IUser } from "../../../interfaces/IAuth";
import { useNavigate } from "react-router-dom";
import { useStoreUser } from "../../../store/store";
import { phoneNumberValidation } from "../validations";

export default function RemindPassword() {
  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });
  const users = useStoreUser((state) => state.users);
  

  const onSubmit: SubmitHandler<IUser> = (data) => {
    const user = users?.find((u) => u.phoneNumber === data.phoneNumber);

    if (!user) {
      alert("Пользователь с данным номером не зарегистрирован");
    } else {
      alert(`Ваш пароль: ${user.password}`);
      navigate("/login");
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Введите ваш номер телефона
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
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
