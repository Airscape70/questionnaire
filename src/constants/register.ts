export const REQUIRED_FIELD = "Обязательно для заполнения!";

export const REGISTER_TEXT_FIELDS = [
  {
    name: "email",
    label: "Почта",
    type: "email",
    pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    errorMessage: "Почта не корректна",
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    errorMessage:
      "Пароль должен быть не менее 8 символов и содержать минимум одну цифру, одну заглавную и одну строчную букву",
  },
  {
    name: "login",
    label: "Логин",
    type: "text",
    pattern: /^[a-zA-Z0-9_.-]{3,20}$/,
    errorMessage:
      "Логин должен содержать только буквы, цифры, символы _.- и быть длиной от 3 до 20 символов",
  },
  {
    name: "phoneNumber",
    label: "Номер телефона",
    pattern: /^\+7\d{3}\d{7}$/,
    errorMessage: "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX",
  },
  {
    name: "fullName",
    label: "ФИО",
    type: "text",
    pattern: /[а-яА-я]/,
    errorMessage: "ФИО не может содержать английские буквы",
  },
];
