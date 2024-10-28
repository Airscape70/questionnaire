export const REQUIRED_FIELD = "Обязательно для заполнения!";

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match(/^[a-zA-Z0-9_.-]{3,20}$/)) {
      return "Логин должен содержать только буквы, цифры, символы _.- и быть длиной от 3 до 20 символов.";
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      return "Пароль должен быть не менее 8 символов и содержать минимум одну цифру, одну заглавную и одну строчную букву'";
    }

    return true;
  },
};

export const fullNameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[a-zA-z]/)) {
      return "ФИО не может содержать английские буквы";
    } else if (value.length < 10) {
      return "ФИО не может быть меньше 10 букв";
    }

    return true;
  },
};

export const phoneNumberValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match(/^\+7\d{3}\d{7}$/)) {
      return "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX";
    }
    return true;
  },
};

export const selectValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value) {
      return "Нужно выбрать из списка";
    }
    return true
  }
};