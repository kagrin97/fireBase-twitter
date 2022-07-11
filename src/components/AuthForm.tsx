import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "../fbase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error: any) {
      const checkMsg = /(?:\/)([a-z-]+)/;
      setError(error.message.match(checkMsg)[1].replace(/-/gi, " "));
    }
  };
  const onAccount = () => {
    setNewAccount(true);
  };
  const onLogIn = () => {
    setNewAccount(false);
  };
  return (
    <>
      <form onSubmit={onSubmit} className={`flex flex-col mt-28`}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className={`my-4`}
        />
        <div className={`flex justify-between`}>
          <input
            type="submit"
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-28 rounded-full mb-4`}
            value="계정 생성"
            onClick={onAccount}
          />
          or
          <input
            type="submit"
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-28 rounded-full mb-4`}
            value="로그인"
            onClick={onLogIn}
          />
        </div>
        {error && (
          <div className={`bg-red-300 px-4 py-4 rounded-md text-red-900`}>
            {error}
          </div>
        )}
      </form>
    </>
  );
}
