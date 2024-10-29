import { ILogin, IUser } from "./IAuth"

export interface IApi {
  reminder: (data: IUser) => IUser | undefined
  login: (data: ILogin) => IUser | undefined
  register: (data: IUser) => void
}