export interface IField {
  name: string;
  label: string;
  type?: string;
  options?: {label: string, value: string}[]
  pattern?: RegExp;
  errorMessage?: string;
}

export interface IJenre {
  id: number
  label:  string;
  value: string;
}

export interface IDnd {
  name: string;
  label: string;
  options: IJenre[]
}
