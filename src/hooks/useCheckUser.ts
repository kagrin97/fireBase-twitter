import { useEffect, useState } from "react";

import { authService } from "../fbase";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";

import { loadUserInfo } from "redux/reducers/userInfo/reducer";

function useCheckUser() {
  const [init, setInit] = useState(false);

  let userObj = useSelector((state: any) => state);

  const dispatch = useDispatch();

  let isLogin = false;
  if (userObj.accessToken) {
    isLogin = true;
  } else {
    isLogin = false;
  }

  const authStateChangedHandler = async () => {
    console.log(userObj);
    await dispatch(loadUserInfo());
    console.log(userObj);
    setInit(true);
  };

  useEffect(() => {
    authStateChangedHandler();
  }, []);

  const refreshUser = async () => {
    await updateCurrentUser(authService, authService.currentUser);
  };

  return { init, userObj, isLogin, refreshUser, authStateChangedHandler };
}

export default useCheckUser;
