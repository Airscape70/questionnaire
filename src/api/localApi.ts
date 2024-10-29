import { IApi } from "../interfaces/IApi";
import { ILogin, IUser } from "../interfaces/IAuth";

function getUsers(): IUser[] {
  const json = localStorage.getItem("users");
  return json ? JSON.parse(json) : [];
}

export function reminder(data: IUser) {
  const users = getUsers();
  return users.find((u) => u.phoneNumber === data.phoneNumber);
}

export function login(data: ILogin) {
  const users = getUsers();
  return users.find(
    (u) => u.login === data.login && u.password === data.password
  );
}

export function register(data: IUser) {
  const users = getUsers();
  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
}

const api: IApi = {
  reminder,
  login,
  register,
};

export default api;
