import { ILogin, IUser } from "./IAuth";
import { INews } from "./INews";
import { IQuestionnare } from "./IQuestionnare";

export interface IStoreUser {
  user?: {
    token: string;
    userData: IUser;
  };
  users?: IUser[];
  news?: INews[];
  questions?: any;
  setUser: (data: IUser) => void;
  setUsers: () => void;
  setNews: (token: string) => void;
  setQuetions: () => void;
  setUserInterests: (id: number, interests: IQuestionnare) => void;
  login: (login: ILogin) => void;
  logout: () => void;
}
