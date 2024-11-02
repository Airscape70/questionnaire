import { Container } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStoreUser } from "../store/store";
import { IQuestionnare } from "../interfaces/IQuestionnare";
import { GeneralForm } from "../components/form/GeneralForm";
import { CSSProperties } from "styled-components";
import { HOME } from "../constants/navigateContants";

export const QuestionnaireFormStyle: CSSProperties = {
  maxWidth: "500px",
  maxHeight: "100vh",
  display: "flex",
  flexFlow: "column wrap",
  columnGap: "50px",
  rowGap: "30px",
  margin: "20px 0px",
};

export default function QuestionnairePage() {
  const questions = useStoreUser((state) => state.questions);
  const setIterests = useStoreUser((state) => state.setInerests);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IQuestionnare> = (data) => {
    setIterests(data);
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
