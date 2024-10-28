import { Box } from "@mui/material";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import JenreCard from "./jenreCard/JenreCard";
import { IJenre } from "../../interfaces/IQuestionnare";

export default function ColumnDnD({ jenres }: { jenres: IJenre[] }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: "5px",
        padding: "15px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <SortableContext items={jenres} strategy={verticalListSortingStrategy}>
        {jenres.map((jenre) => (
          <JenreCard key={jenre.id} jenre={jenre} />
        ))}
      </SortableContext>
    </Box>
  );
}
