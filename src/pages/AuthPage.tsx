import { Outlet } from "react-router-dom";
import { AuthContainer } from "./styles/authStyles";

export default function AuthPage() {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  );
}
