import { create } from "zustand";
import { ILogin, IUser } from "../interfaces/IAuth";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { IStoreUser } from "../interfaces/IStoreUser";
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

export const useStoreUser = create<IStoreUser>()(
  immer(
    persist(
      (set, get) => ({
        setUsers: async () => {
          return instance
            .get("users")
            .then(({ data }) => set({ users: data }))
            .catch((error) => consoleError(error));
        },
        setQuetions: async () => {
          return instance
            .get("questions")
            .then(({ data }) => {
              get().user?.userData.gender === "Мужской"
                ? set({ questions: data.male })
                : set({ questions: data.female });
            })
            .catch((error) => consoleError(error));
        },

        setUser: async (newUser: IUser) => {
          return instance
            .post("register", newUser)
            .then(({ data }) => {
              set({ user: { token: data.accessToken, userData: data.user } });
            })
            .catch((error) => consoleError(error));
        },

        setUserInterests: async (id: number, interests: IQuestionnare) => {
          return instance
            .patch(`users/${id}`, { interests: interests })
            .then(({ data }) => {
              set((state) => ({
                user: { ...state.user, userData: data },
              }));
            })
            .catch((error) => consoleError(error));
        },

        login: async (login: ILogin) => {
          return instance
            .post("login", login)
            .then(({ data }) => {
              set({
                user: { token: data.accessToken, userData: data.user },
              });
            })
            .catch((error) => consoleError(error));
        },

        logout: () => {
          set({ user: undefined });
        },

        setNews: async (token: string) => {
          return instance
            .get("news", { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => set({ news: response.data }))
            .catch((error) => consoleError(error));
        },
      }),

      { name: "user-storage" }
    )
  )
);
