import { Typography } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IOption } from "../../../../../interfaces/IField";

export const JenreCard = ({ jenre }: { jenre: IOption }) => {
  const { id, label } = { ...jenre };
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.16) 5px 10px 10px 5px",
    width: "100%",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    touchAction: "none",
    cursor: "pointer",
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Typography variant="h6">{label}</Typography>
    </div>
  );
};
