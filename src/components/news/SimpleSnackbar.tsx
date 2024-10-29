import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function SimpleSnackbar() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);
  

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => navigate('/questionnaire')}>
        Пройти
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Пожалуйста, пройдите небольшое анкетирование"
        action={action}
      />
    </div>
  );
}
