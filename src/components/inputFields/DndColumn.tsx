import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import JenreCard from "../questionnaire/jenreCard/JenreCard";
import { IJenre } from "../../interfaces/IQuestionnare";
import { Box, Typography } from "@mui/material";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { FC, useState } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Controller, useFormContext } from "react-hook-form";

export interface DndColumnProps {
  name: string;
  label: string;
}

export const DndColumn: FC<DndColumnProps> = ({ name, label }) => {
  const [jenres, setJenres] = useState<IJenre[]>([
    { id: 1, title: "Ужасы" },
    { id: 2, title: "Комедия" },
    { id: 3, title: "Драмма" },
    { id: 4, title: "Триллер" },
    { id: 5, title: "Боевик" },
    { id: 6, title: "Мультфильм" },
  ]);

  const { control } = useFormContext();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id) return;

    const getJenrePos = (id: UniqueIdentifier) =>
      jenres.findIndex((jenre) => jenre.id === id);

    setJenres((jenres) => {
      const originalPos = getJenrePos(active.id);
      const newPos = getJenrePos(over!.id);
      return arrayMove(jenres, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <Typography variant="h5">{label}</Typography>

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
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <SortableContext
              items={jenres}
              strategy={verticalListSortingStrategy}
            >
              {jenres.map((jenre) => (
                <JenreCard key={jenre.id} jenre={jenre} />
              ))}
            </SortableContext>
          )}
        />
      </Box>
    </DndContext>
  );
};
