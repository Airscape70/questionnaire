import axios from "axios";
import { IUser } from "../interfaces/IAuth";

const instance = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const postUser = (newUser: IUser) => {
  return instance.post('/register', newUser)
}