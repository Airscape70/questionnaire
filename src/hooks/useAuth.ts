import { useEffect, useState } from "react";
import { useStoreUser } from "../store/store";
import { useNavigate } from "react-router-dom";
import { HOME, LOGIN } from "../constants/navigateContants";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const userToken = useStoreUser((state) => state.user?.token);
  const setNews = useStoreUser((state) => state.setNews);
  const setQuestions = useStoreUser((state) => state.setQuetions);
  const setUsers = useStoreUser((state) => state.setUsers);

  const setPage = (userToken: string): void => {
    setNews(userToken);
    setQuestions();
    setIsAuthenticated(true);
  };

  useEffect(() => {
    setUsers();
    if (userToken) {
      setPage(userToken);
      navigate(HOME);
    } else {
      setIsAuthenticated(false);
      navigate(LOGIN);
    }
  }, [userToken]);

  return isAuthenticated;
};
