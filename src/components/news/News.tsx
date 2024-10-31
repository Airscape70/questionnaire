import { Box, Container } from "@mui/material";
import NewsCard from "./newsCard/NewsCard";
import { useStoreUser } from "../../store/store";

export default function News() {
  const news = useStoreUser((state) => state.news);

  return (
    <Container maxWidth="md">
      <Box>
        {news?.map((n) => (
          <NewsCard key={n.id} info={n} />
        ))}
      </Box>
    </Container>
  );
}
