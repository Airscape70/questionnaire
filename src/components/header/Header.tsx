import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useStoreUser } from "../../store/store";
import { MainButton, SubHeading } from "../../styles";

export default function Header() {
  const logout = useStoreUser((state) => state.logout);
  const userFullName = useStoreUser((state) => state.user?.userData.fullName);
  const greeting = `Здравствуйте,  ${userFullName}!`;
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 12 }}>
      <AppBar position="fixed">
        <Toolbar>
          <SubHeading title="Новости" />
          <SubHeading title={greeting} />
          <MainButton
            title="Выйти"
            type="button"
            handler={logout}
            fullWidth={false}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
