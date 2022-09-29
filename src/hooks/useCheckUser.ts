import { useEffect, useState } from "react";

import { authService } from "../fbase";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";

function useCheckUser() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<any>(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = async () => {
    await updateCurrentUser(authService, authService.currentUser);
    setUserObj(authService.currentUser);
  };

  return { init, isLoggedIn, userObj, refreshUser };
}

export default useCheckUser;
