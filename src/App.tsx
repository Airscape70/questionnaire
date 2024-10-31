import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Questionnaire from "./components/questionnaire/Questionnaire";
import { useEffect, useState } from "react";
import { useStoreUser } from "./store/store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RemindPassword from "./components/auth/RemindPassword";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userToken = useStoreUser((state) => state.user?.token);
  const getNews = useStoreUser((state) => state.getNews);
  const getQuestions = useStoreUser((state) => state.getQuetions);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      getNews(userToken);
      getQuestions();
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, [userToken]);

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
