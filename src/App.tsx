import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import RemindPassword from "./components/auth/login/RemindPassword";
import Questionnaire from "./components/questionnaire/Questionnaire";
import { useEffect, useState } from "react";
import { useStoreUser } from "./store/store";

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

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
        if (userToken) {
          getNews(userToken)
          setIsAuthenticated(true);
          navigate('/home')
        } else {
          setIsAuthenticated(false);
          navigate('/login')
        }
      } 
    getData();
  }, [userToken]);
  
  const routes = isAuthenticated ? mainRoutes : authRoutes;
  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
