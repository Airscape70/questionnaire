import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IAuth";
import { useStoreUser } from "../store/store";
import { TEXT_FIELDS } from "../constants/fieldsConstants";
import { AuthContainer } from "./pagesStyles/authStyles";
import { GeneralForm } from "../components/form/GeneralForm";
import { formStyle, MainHeading } from "../styles";
import { LOGIN } from "../constants/navigateContants";

export default function RemindPage() {
  const navigate = useNavigate();
  const users = useStoreUser((state) => state.users);
  const fields = TEXT_FIELDS.filter((f) => f.type === "tel");

  const onSubmit: SubmitHandler<IUser> = (data) => {
    const user = users?.find((u) => u.phoneNumber === data.phoneNumber);
    if (!user) {
      alert("Пользователь с данным номером не зарегистрирован");
    } else {
      alert(`Ваш пароль: ${user.password}`);
      navigate(LOGIN);
    }
  };

  return (
    <AuthContainer>
      <MainHeading title=" Введите ваш номер телефона" />
      <GeneralForm
        onSubmit={onSubmit}
        fields={fields}
        buttonTitle="Вспомнить"
        styles={formStyle}
      />
    </AuthContainer>
  );
}
