import { Container } from "@mui/material";
import News from "../components/news/News";
import Questionnaire from "../components/questionnaire/Questionnaire";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      {/* <News /> */}
      <Questionnaire />
    </Container>
  );
}
