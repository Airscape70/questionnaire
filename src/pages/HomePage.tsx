import { Button, Container } from "@mui/material";
import News from "../components/news/News";
import SimpleSnackbar from "../components/news/SimpleSnackbar";
import { useStoreUser } from "../store/store";

export default function HomePage() {

  const logout = useStoreUser((state) => state.logout)

  return (
    <Container maxWidth="xl">
      <Button onClick={logout}>Logout</Button>
      <News />
      <SimpleSnackbar />
    </Container>
  );
}
