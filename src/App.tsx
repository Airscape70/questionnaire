import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { authRoutes, mainRoutes } from "./routes/routes";


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
