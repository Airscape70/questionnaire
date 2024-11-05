import { Container } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStoreUser } from "../store/store";
import { IQuestionnare } from "../interfaces/IQuestionnare";
import { GeneralForm } from "../components/form/GeneralForm";
import { HOME } from "../constants/navigateContants";
import { QuestionnaireFormStyle } from "./pagesStyles/questionnaireStyles";

export default function QuestionnairePage() {
  const questions = useStoreUser((state) => state.questions);
  const setUserInterests = useStoreUser((state) => state.setUserInterests);
  const userId = useStoreUser((state) => state.user!.userData.id)
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IQuestionnare> = (data) => {
    setUserInterests(userId, data);
    alert("Большое спасибо!");
    navigate(HOME);
  };

  return (
    <Container maxWidth="lg">
      <GeneralForm
        onSubmit={onSubmit}
        fields={questions}
        buttonTitle="Отправить"
        styles={QuestionnaireFormStyle}
      />
    </Container>
  );
}
