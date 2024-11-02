import { IOption } from "./IField";

export interface IQuestionnare {
  hobby: string;
  weather: string;
  dream: string;
  music: string;
  beer: boolean;
  favoriteJenres: IOption[];
  userFile: File;
}
