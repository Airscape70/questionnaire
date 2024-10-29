import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import RemindPassword from "./components/auth/login/RemindPassword";
import Questionnaire from "./components/questionnaire/Questionnaire";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="reminder" element={<RemindPassword />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
