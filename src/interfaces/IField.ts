import { ValidationRules } from "./IAuth";

export interface IJenre {
  id: number | string;
  title: string;
}

export interface IField {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "tel";
  options?: string[]
  errorMessage?: string;
  rules?: ValidationRules;
}

export interface IDnd {
  name: string;
  label: string;
  options: IJenre[]
}