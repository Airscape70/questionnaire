import { Container } from "@mui/material";
import News from "../components/news/News";
import Header from "../components/header/Header";
import NewsDialog from "../components/news/NewsDialog";
import { useStoreUser } from "../store/store";

export default function HomePage() {
  const interests = useStoreUser((state) => state.user?.userData.interests);
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <News />
        {!interests && <NewsDialog />}
      </Container>
    </>
  );
}
