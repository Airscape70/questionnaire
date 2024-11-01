import { IField } from "../interfaces/IField";

export const REQUIRED_FIELD = "Обязательно для заполнения!";

export const EMAIL_PATTERN = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const NICKNAME_PATTERN = /^[a-zA-Z0-9_.-]{3,20}$/;
export const PHONE_NUMBER_PATTERN = /^\+7\d{3}\d{7}$/;
export const FULL_NAME_PATTERN = /[а-яА-я]/;

export const TEXT_FIELDS: IField[] = [
  {
    name: "email",
    label: "Почта",
    type: "email",
    pattern: EMAIL_PATTERN,
    errorMessage: "Почта не корректна",
    isLoginField: true,
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    pattern: PASSWORD_PATTERN,
    errorMessage:
      "Пароль должен быть не менее 8 символов и содержать минимум одну цифру, одну заглавную и одну строчную букву",
    isLoginField: true,
  },
  {
    name: "nickName",
    label: "Ник",
    type: "text",
    pattern: NICKNAME_PATTERN,
    errorMessage:
      "Ник должен содержать только латинские буквы, цифры, символы _.- и быть длиной от 3 до 20 символов",
    isLoginField: false,
  },
  {
    name: "phoneNumber",
    label: "Номер телефона",
    type: "tel",
    pattern: PHONE_NUMBER_PATTERN,
    errorMessage: "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX",
    isLoginField: false,
  },
  {
    name: "fullName",
    label: "ФИО",
    type: "text",
    pattern: FULL_NAME_PATTERN,
    errorMessage: "ФИО не может содержать английские буквы",
    isLoginField: false,
  },
];

export const SELECT_FIELD: IField = {
    name: "gender",
    label: "Пол",
    type: "select",
    options: [
      { id: 1, label: "Мужской", value: "Мужской" },
      { id: 2, label: "Женский", value: "Женский" }
    ]
}