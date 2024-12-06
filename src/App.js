import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { checkToken } from "./api/storage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
const App = () => {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const tokenAvailable = checkToken();
    console.log(tokenAvailable);
    if (tokenAvailable) {
      setUser(true);
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Outlet />
    </UserContext.Provider>
  );
};
export default App;
