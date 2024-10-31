export const REQUIRED_FIELD = "Обязательно для заполнения!";

export const VALIDATION = [
  {
    type: "login",
    validate: /^[a-zA-Z0-9_.-]{3,20}$/,
    error: "Логин должен содержать только буквы, цифры, символы _.- и быть длиной от 3 до 20 символов",
  },
  {
    type: "email",
    validate: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    error: "Почта не корректна",
  },
  {
    type: "password",
    validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    error: "Пароль должен быть не менее 8 символов и содержать минимум одну цифру, одну заглавную и одну строчную букву",
  },
  {
    type: "fullName",
    validate: /[a-zA-z]/,
    error: "ФИО не может содержать английские буквы",
  },
  {
    type: "phoneNumber",
    validate: /^\+7\d{3}\d{7}$/,
    error: "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX",
  },
  {
    type: "select",
    error: "Нужно выбрать из списка",
  },

]
