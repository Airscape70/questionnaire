import { Box, Button, Container } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IQuestionnare } from "../../interfaces/IQuestionnare";
import { selectValidation } from "../../constants/validations";
import { RadioFieldInput } from "../inputFields/RadioFieldInput";
import { TextFieldInput } from "../inputFields/TextFieldInput";
import { SelectFieldInput } from "../inputFields/SelectFieldInput";
import { SwitchFieldInput } from "../inputFields/SwitchFieldInput";
import { CheckboxGroup } from "../inputFields/CheckboxGroup";
import UploadBtn from "../inputFields/UploadBtn";
import { DndColumn } from "../inputFields/DndColumn";

export default function Questionnaire() {
  const methods = useForm<IQuestionnare>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IQuestionnare> = (data) => {
    console.log(data);
    methods.reset();
    alert("Большое спасибо!");
  };

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
              options={["Зима", "Весна", "Лето", "Осень"]}
            />

            <TextFieldInput name="dream" label="Твоя мечта" type="text" />

            <SelectFieldInput
              name="music"
              label="Любимый жанр музыки"
              options={["HIP-HOP", "ROCK", "POP", "HOUSE"]}
              rules={selectValidation}
            />

            <SwitchFieldInput name="beer" options={["Пиво"]} label="Пиво" />
          </Box>

          <Box>
            <DndColumn name="favoriteJenres" label="Топ жанров фильмов" />

            <UploadBtn />
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
