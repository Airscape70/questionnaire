import { IQuestionnare } from "./IQuestionnare";

export interface ValidationRules {
  required: string;
  validate?: (value: string) => boolean | string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface IUser {
  id: number;
  login: string;
  password: string;
  phoneNumber: number;
  fullName: string;
  gender: string;
  interests?: IQuestionnare
}
