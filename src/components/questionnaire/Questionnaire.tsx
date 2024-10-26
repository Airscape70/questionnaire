import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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

interface IQuestionnareInForm {
  hobby: string;
  weather: string;
  dream: string;
  music: string;
  beer: boolean;
}
export interface IJenre {
  id: number | string;
  title: string;
}

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
  const [jenres, setJenres] = useState<IJenre[]>([
    { id: 1, title: "Ужасы" },
    { id: 2, title: "Комедия" },
    { id: 3, title: "Драмма" },
    { id: 4, title: "Триллер" },
    { id: 5, title: "Боевик" },
    { id: 6, title: "Мультфильм" },
  ]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IQuestionnareInForm>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IQuestionnareInForm> = (data) => {
    console.log(data);
    reset();
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
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <Controller
            control={control}
            name="hobby"
            rules={{ required: "Обязательно для заполнения!" }}
            render={({ field }) => (
              <Box
                sx={{ border: "1px solid black", padding: "20px" }}
              >
                <Typography variant="h5"> Твое хобби </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Рисование" />
                  <FormControlLabel control={<Checkbox />} label="Танцы" />
                  <FormControlLabel control={<Checkbox />} label="Прогулка" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Настольные игры"
                  />
                </FormGroup>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="weather"
            rules={{ required: "Обязательно для заполнения!" }}
            render={({ field }) => (
              <Box
                sx={{ border: "1px solid black", padding: "20px" }}
              >
                <FormControl>
                  <Typography variant="h5"> Любимое время года</Typography>
                  <RadioGroup defaultValue="Зима" name="weather">
                    <FormControlLabel
                      value="Зима"
                      control={<Radio />}
                      label="Зима"
                    />
                    <FormControlLabel
                      value="Весна"
                      control={<Radio />}
                      label="Весна"
                    />
                    <FormControlLabel
                      value="Лето"
                      control={<Radio />}
                      label="Лето"
                    />
                    <FormControlLabel
                      value="Осень"
                      control={<Radio />}
                      label="Осень"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="dream"
            rules={{ required: "Обязательно для заполнения!" }}
            render={({ field }) => (
              <Box
                sx={{ border: "1px solid black", padding: "20px" }}
              >
                <Typography variant="h5">Твоя мечта</Typography>
                <TextField
                  type="text"
                  size="small"
                  margin="normal"
                  fullWidth={true}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.dream?.message}
                  helperText={errors.dream?.message}
                />
              </Box>
            )}
          />

          <Controller
            control={control}
            name="music"
            rules={{ required: "Обязательно для заполнения!" }}
            render={({ field }) => (
              <FormControl fullWidth sx={{ mt: 2 }}>
                <Typography variant="h5">Любимый жанр музыки</Typography>
                <Select
                  size="small"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  error={!!errors.music?.message}
                >
                  <MenuItem value={"HIP-HOP"}>HIP-HOP</MenuItem>
                  <MenuItem value={"ROCK"}>ROCK</MenuItem>
                  <MenuItem value={"POP"}>POP</MenuItem>
                  <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="beer"
            rules={{ required: "Обязательно для заполнения!" }}
            render={({ field }) => (
              <FormControlLabel control={<Switch />} label="Пиво" />
            )}
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
    </Container>
  );
}
