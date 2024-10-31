import { Box, Button, Container } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IQuestionnare } from "../../interfaces/IQuestionnare";
import { RadioFieldInput } from "../inputFields/RadioFieldInput";
import { TextFieldInput } from "../inputFields/TextFieldInput";
import { SelectFieldInput } from "../inputFields/SelectFieldInput";
import { SwitchFieldInput } from "../inputFields/SwitchFieldInput";
import { CheckboxGroup } from "../inputFields/CheckboxGroup";
import { DndColumn } from "../inputFields/DndColumn";
import { UploadBtn } from "../inputFields/UploadBtn";
import { useStoreUser } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { QuestionnaireBoxStyled } from "./questionnaireStyles/questionnaireStyles";

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
