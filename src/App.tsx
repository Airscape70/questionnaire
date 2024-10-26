import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
