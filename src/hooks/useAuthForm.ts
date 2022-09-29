import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "../fbase";

import { errorHandler } from "util/errorHandler";

function useAuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmitAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error: any) {
      setError(errorHandler(error));
    }
  };
  const onAccount = () => {
    setNewAccount(true);
  };
  const onLogIn = () => {
    setNewAccount(false);
  };

  return {
    email,
    password,
    error,
    onChangeForm,
    onSubmitAuth,
    onAccount,
    onLogIn,
  };
}

export default useAuthForm;
