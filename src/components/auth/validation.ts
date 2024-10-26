const REQUIRED_FIELD = "Обязательно для заполнения!";

export const fullNameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[a-zA-z]/)) {
      return "ФИО не может содержать английские буквы";
    } else if (value.length < 10) {
      return "ФИО не может быть меньше 10 букв";
    }

    return true;
  }
};
