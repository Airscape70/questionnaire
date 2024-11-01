import { FormProvider, useForm } from "react-hook-form";
import { FC } from "react";
import { GeneralButton } from "../common/GeneralButton";
import { TextFieldInput } from "./inputFields/TextFieldInput";
import { SelectFieldInput } from "./inputFields/SelectFieldInput";
import { CheckboxGroup } from "./inputFields/CheckboxGroup";
import { RadioFieldInput } from "./inputFields/RadioFieldInput";
import { SwitchFieldInput } from "./inputFields/SwitchFieldInput";
import { DndColumn } from "./inputFields/DndColumn";
import { UploadBtn } from "./inputFields/UploadBtn";
import { IField } from "../../interfaces/IField";
import { CSSProperties } from "styled-components";

interface IFormProps {
  onSubmit: (data: any) => void;
  fields: IField[];
  buttonTitle: string;
}

export const formStyle: CSSProperties = {
  maxWidth: "360px",
};


export const GeneralForm: FC<IFormProps> = ({
  onSubmit,
  fields,
  buttonTitle,
}) => {
  const methods = useForm({ mode: "onBlur" });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
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
        <GeneralButton type="submit" title={buttonTitle} />
      </form>
    </FormProvider>
  );
};
