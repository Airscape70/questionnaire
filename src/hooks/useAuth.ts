import { useEffect, useState } from "react";
import { useStoreUser } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userToken = useStoreUser((state) => state.user?.token);
  const getNews = useStoreUser((state) => state.getNews);
  const getQuestions = useStoreUser((state) => state.getQuetions);
  const getUsers = useStoreUser((state) => state.getUsers);
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
    getUsers();
  }, [userToken]);

  return isAuthenticated;
};