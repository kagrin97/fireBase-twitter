import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authService } from "../fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onGoogleClick = async () => {
    const data = await signInWithPopup(authService, new GoogleAuthProvider());
  };

  const onGitClick = async () => {
    const data = await signInWithPopup(authService, new GithubAuthProvider());
  };
  return (
    <div className={`flex flex-col w-80`}>
      <AuthForm />
      <div className={`flex mt-12 justify-evenly`}>
        <button onClick={onGoogleClick}>
          <img width="40" alt="google" src="google.png" />
        </button>
        or
        <button onClick={onGitClick}>
          <img width="40" alt="github" src="git.png" />
        </button>
      </div>
    </div>
  );
};
export default Auth;
