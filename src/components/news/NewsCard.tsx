import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function NewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: "0 0 50px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            №1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="УАЗ «Патриот» получит новый дизайн и мотор в 2025 году"
        subheader="Октябрь 25, 2024"
      />
      <CardMedia
        component="img"
        height="400"
        image="https://avatars.dzeninfra.ru/get-ynews/271828/218bdb2c6199e3d103e4f0d575814b34/800x400"
        alt="UAZ"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          В следующем году ждём обновлённый уазовский «Патриот»
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            Как пишут «Известия» , Ульяновский автозавод представит обновленный
            «Патриот» в IV квартале 2025 года. Компанию агрегату составит
            шестиступенчатая «механика» производства Заволжского моторного
            завода и электромеханическая раздатка.Motor В салоне нового
            «Патриота» разместятся переделанные передняя панель и центральный
            тоннель, а также более компактный по диаметру руль с с утолщениями в
            местах хвата и подушкой безопасности.CarsWeek.ru
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
