import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Questionnaire from "./components/questionnaire/Questionnaire";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RemindPassword from "./components/auth/RemindPassword";
import { useAuth } from "./hooks/useAuth";

const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reminder", element: <RemindPassword /> },
];

const mainRoutes = [
  { path: "/home", element: <HomePage /> },
  { path: "/questionnaire", element: <Questionnaire /> },
];

function App() {
  const isAuthenticated = useAuth();
  const routes = isAuthenticated ? mainRoutes : authRoutes;

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
