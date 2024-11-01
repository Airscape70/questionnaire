import { Button, Container } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RadioFieldInput } from "../form/inputFields/RadioFieldInput";
import { TextFieldInput } from "../form/inputFields/TextFieldInput";
import { SelectFieldInput } from "../form/inputFields/SelectFieldInput";
import { SwitchFieldInput } from "../form/inputFields/SwitchFieldInput";
import { CheckboxGroup } from "../form/inputFields/CheckboxGroup";
import { DndColumn } from "../form/inputFields/DndColumn";
import { UploadBtn } from "../form/inputFields/UploadBtn";
import { useStoreUser } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { QuestionnaireBoxStyled } from "./questionnaireStyles/questionnaireStyles";
import { IQuestionnare } from "../../interfaces/IQuestionnare";

export default function Questionnaire() {
  const methods = useForm<IQuestionnare>({ mode: "onBlur" });
  const questions = useStoreUser((state) => state.questions);
  const setIterests = useStoreUser((state) => state.setInerests);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IQuestionnare> = (data) => {
    setIterests(data);
    alert("Большое спасибо!");
    navigate("/home");
  };

  return (
    <Container maxWidth="md">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <QuestionnaireBoxStyled>
            <CheckboxGroup {...questions.hobby} />
            <RadioFieldInput {...questions.weather} />
            <TextFieldInput {...questions.dream} />
            <SelectFieldInput {...questions.music} />
            <SwitchFieldInput {...questions.beer} />
            <DndColumn {...questions.favoritesJenres} />
            <UploadBtn {...questions.userFile} />
          </QuestionnaireBoxStyled>

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 2 }}
          >
            Отправить
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
}
