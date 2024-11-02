import { FormProvider, useForm } from "react-hook-form";
import { FC } from "react";
import { TextFieldInput } from "./inputFields/TextFieldInput";
import { SelectFieldInput } from "./inputFields/SelectFieldInput";
import { CheckboxGroup } from "./inputFields/CheckboxGroup";
import { RadioFieldInput } from "./inputFields/RadioFieldInput";
import { SwitchFieldInput } from "./inputFields/SwitchFieldInput";
import { DndColumn } from "./inputFields/DnDColumn/DndColumn";
import { UploadBtn } from "./inputFields/UploadBtn";
import { IField } from "../../interfaces/IField";
import { CSSProperties } from "styled-components";
import { MainButton } from "../../styles";

interface IFormProps {
  onSubmit: (data: any) => void;
  fields: IField[];
  buttonTitle: string;
  styles?: CSSProperties;
}

export const GeneralForm: FC<IFormProps> = ({
  onSubmit,
  fields,
  buttonTitle,
  styles,
}) => {
  const methods = useForm({ mode: "onBlur" });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={styles}>
        {fields.map((field) => {
          switch (field.type) {
            case "text":
              return <TextFieldInput key={field.name} {...field} />;

            case "password":
              return <TextFieldInput key={field.name} {...field} />;

            case "email":
              return <TextFieldInput key={field.name} {...field} />;

            case "tel":
              return <TextFieldInput key={field.name} {...field} />;

            case "select":
              return <SelectFieldInput key={field.name} {...field} />;

            case "checkbox":
              return <CheckboxGroup key={field.name} {...field} />;

            case "radio":
              return <RadioFieldInput key={field.name} {...field} />;

            case "switch":
              return <SwitchFieldInput key={field.name} {...field} />;

            case "drag":
              return <DndColumn key={field.name} {...field} />;

            case "upload":
              return <UploadBtn key={field.name} {...field} />;

            default:
              return null;
          }
        })}
        <MainButton type="submit" title={buttonTitle} />
      </form>
    </FormProvider>
  );
};
