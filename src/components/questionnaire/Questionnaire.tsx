import { Box, Button, Container, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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
import { useState } from "react";
import ColumnDnD from "./ColumnDnD";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import { IJenre, IQuestionnare } from "../../interfaces/IQuestionnare";
import { selectValidation } from "../../constants/validations"
import { RadioFieldInput } from "../inputFields/RadioFieldInput";
import { TextFieldInput } from "../inputFields/TextFieldInput";
import { SelectFieldInput } from "../inputFields/SelectFieldInput";
import { SwitchFieldInput } from "../inputFields/SwitchFieldInput";
import { CheckboxGroup } from "../inputFields/CheckboxGroup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Questionnaire() {
  const methods = useForm<IQuestionnare>({ mode: "onBlur" });

  const [jenres, setJenres] = useState<IJenre[]>([
    { id: 1, title: "Ужасы" },
    { id: 2, title: "Комедия" },
    { id: 3, title: "Драмма" },
    { id: 4, title: "Триллер" },
    { id: 5, title: "Боевик" },
    { id: 6, title: "Мультфильм" },
  ]);

  const onSubmit: SubmitHandler<IQuestionnare> = (data) => {
    console.log(data);
    methods.reset();
  };

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
    <Container maxWidth="md">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box>
            <CheckboxGroup
              name="hobby"
              label="Твое хобби"
              options={[
                "Рисование",
                "Танцы",
                "Прогулка",
                "Настольные игры",
                "Спорт",
              ]}
            />

            <RadioFieldInput
              name="weather"
              label="Любимое время года"
              defaultValue="Зима"
              options={["Зима", "Весна", "Лето", "Осень"]}
            />

            <TextFieldInput
              name="dream"
              label="Твоя мечта"
              type="text"
            />

            <SelectFieldInput
              name="music"
              label="Любимый жанр музыки"
              options={["HIP-HOP", "ROCK", "POP", "HOUSE"]}
              rules={selectValidation}
            />

            <SwitchFieldInput
              name="beer"
              options={["Пиво"]}
              label="Пиво"
            />
          </Box>

          <Box>
            <Typography variant="h5">Твой топ жанров фильмов</Typography>
            <DndContext
              sensors={sensors}
              onDragEnd={handleDragEnd}
              collisionDetection={closestCorners}
            >
              <ColumnDnD jenres={jenres} />
            </DndContext>

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Загрузите аватар
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 2 }}
          >
            Отправить
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
}
