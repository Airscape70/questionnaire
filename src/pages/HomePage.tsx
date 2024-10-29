import { Container } from "@mui/material";
import News from "../components/news/News";
import SimpleSnackbar from "../components/news/SimpleSnackbar";


export default function HomePage() {

  return (
    <Container maxWidth="xl">
      <News />
      <SimpleSnackbar />
    </Container>
  );
}
