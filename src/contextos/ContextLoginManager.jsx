import { useState } from "react";
import ContextLogin from "./ContextLogin";

function ContextLoginManager({ children }) {
  const [login, setLogin] = useState(false);

  const setLogIn = (username, cb) => {
    if (username === "juan.123") {
      setLogin(true);
      cb();
    }
  };

  const setLogOut = () => {
    setLogin(false);
  };

  return (
    <ContextLogin.Provider
      value={{
        isLogin: login,
        logIn: setLogIn,
        logOut: setLogOut,
      }}
    >
      {children}
    </ContextLogin.Provider>
  );
}

export default ContextLoginManager;
