import { create } from "zustand";
import { ILogin, IUser } from "../interfaces/IAuth";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { INews } from "../interfaces/INews";
import { IQuestionnare } from "../interfaces/IQuestionnare";

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
    interests: IQuestionnare;
  };
  users?: IUser[];
  news?: INews[];
  getUsers: () => void;
  getNews: (token: string) => void;
  postUser: (data: IUser) => void;
  login: (login: ILogin) => void;
  logout: () => void;
  setInerests: (data: IQuestionnare) => void;
}

export const useStoreUser = create<IStoreUser>()(
  immer(
    persist(
      (set) => ({
        user: undefined,
        getUsers: async () => {
          return instance
            .get("users")
            .then((response) => set({ users: response.data }))
            .catch((error) => consoleError(error));
        },

        postUser: async (newUser: IUser) => {
          return instance
            .post("register", newUser)
            .then(({ data }) => {
              set({ user: { token: data.accessToken, ...data.user } });
            })
            .catch((error) => consoleError(error));
        },

        login: async (login: ILogin) => {
          return instance
            .post("login", login)
            .then(({ data }) => {
              set((state) => ({
                user: { ...state.user, token: data.accessToken },
              }));
            })
            .catch((error) => consoleError(error));
        },

        logout: () => {
          set((state) => ({ user: undefined }));
        },

        getNews: async (token: string) => {
          return instance
            .get("news", { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => set({ news: response.data }))
            .catch((error) => consoleError(error));
        },

        setInerests: (data) => {
          set((state) => ({
            user: { ...state.user, interests: data },
          }));
        },
      }),

      { name: "user-storage" }
    )
  )
);
