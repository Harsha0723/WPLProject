import { useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const loginCallback = () => {
    console.log("In loginCallback");
    setLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
  };

  const logoutCallback = () => {
    console.log("In logout callback")
    setLoggedIn(false);
    sessionStorage.setItem("isLoggedIn", "false");
  };

  return { isLoggedIn, loginCallback, logoutCallback };
};

export default useAuth;
