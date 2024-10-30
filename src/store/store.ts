import { create } from "zustand";
import { IUser } from "../interfaces/IAuth";
import { persist } from "zustand/middleware";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const consoleError = (error: any) => {
  const errResponse = error.response
    ? `Статус: ${error.response.status}, Данные: ${error.response.data}`
    : error.request
    ? "Нет ответа"
    : `Ошибка настройки запроса: ${error.message}`;
  alert(`${errResponse}`);
};

interface IStoreUser {
  user?: {
    token: string;
    userData: IUser;
  };
  users?: IUser[];
  postUser: (data: IUser) => void;
  getUsers: () => void;
}

export const useStoreUser = create<IStoreUser>()(
  persist(
    (set) => ({
      user: undefined,
      users: [],

      postUser: async (newUser: IUser) => {
        return instance
          .post("register", newUser)
          .then(({ data }) => {
            set({ user: { token: data.accessToken, ...data.user } });
          })
          .catch((error) => consoleError(error));
      },

      getUsers: async () => {
        return instance
          .get("users")
          .then((response) => set({ users: response.data }))
          .catch((error) => consoleError(error));
      },
    }),
    { name: "user-storage" }
  )
);
