import { Container } from "@mui/material";
import News from "../components/news/News";
import Header from "../components/header/Header";
import QuestionnaireDialog from "../components/news/QuestionnaireDialog";

export default function HomePage() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <News />
        <QuestionnaireDialog />
      </Container>
    </>
  );
}
