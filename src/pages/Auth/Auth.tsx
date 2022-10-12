import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authService } from "fbase";
import AuthForm from "pages/Auth/components/AuthForm";

const Auth = () => {
  const onGoogleClick = () => {
    signInWithPopup(authService, new GoogleAuthProvider());
  };

  const onGitClick = () => {
    signInWithPopup(authService, new GithubAuthProvider());
  };
  return (
    <div className={`flex flex-col w-80`}>
      <AuthForm />
      <div className={`flex mt-12 justify-evenly`}>
        <button name="Google Log in button" onClick={onGoogleClick}>
          <img width="40" alt="google" src="google.png" />
        </button>
        or
        <button name="GitHub Log in button" onClick={onGitClick}>
          <img width="40" alt="github" src="git.png" />
        </button>
      </div>
    </div>
  );
};
export default Auth;
