import { Container } from "@mui/material";
import News from "../components/news/News";
import Questionnare from "../components/questionnaire/Questionnare";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <News />
      <Questionnare />
    </Container>
  );
}
