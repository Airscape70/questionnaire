import axios from "axios";
import { ILogin, IUser } from "../interfaces/IAuth";

const instance = axios.create({
  baseURL: 'http://localhost:3001/'
})

const consoleError = (error: any) => {
  const errResponse = error.response
    ? `Статус: ${error.response.status}, Данные: ${error.response.data}`
    : error.request
    ? "Нет ответа"
    : `Ошибка настройки запроса: ${error.message}`;
  alert(`${errResponse}`);
};


export const postUser = async (newUser: IUser) => {
  return instance.post('register', newUser)
  .then((response) => response)
  .catch((error) => consoleError(error))
}
export const login = async (userLogin: ILogin) => {
  return instance.post('login', userLogin)
  .then((response) => response.data)
  .catch((error) => consoleError(error))
}