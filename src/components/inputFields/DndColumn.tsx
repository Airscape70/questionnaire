import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import JenreCard from "../questionnaire/jenreCard/JenreCard";
import { Typography } from "@mui/material";
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
import { useFormContext } from "react-hook-form";
import { DndBoxStyled } from "./fieldStyles/fieldStyles";
import { IDnd, IJenre } from "../../interfaces/IField";

export const DndColumn: FC<IDnd> = ({ name, label, options }) => {
  const [jenres, setJenres] = useState<IJenre[]>(options);
  const { setValue, control } = useFormContext();
  setValue(name, jenres);

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

      <DndBoxStyled>
        <SortableContext
          {...control}
          items={jenres}
          strategy={verticalListSortingStrategy}
        >
          {jenres!.map((jenre) => (
            <JenreCard key={jenre.id} jenre={jenre} />
          ))}
        </SortableContext>
      </DndBoxStyled>
    </DndContext>
  );
};
