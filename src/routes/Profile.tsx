import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { authService } from "../fbase";

const ProFile = ({
  userObj,
  refreshUser,
}: {
  userObj: any;
  refreshUser: any;
}) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = (event: React.MouseEvent) => {
    authService.signOut();
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };
  return (
    <article className={`mt-12`}>
      <form onSubmit={onSubmit} className={`flex flex-col`}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input
          type="submit"
          value="이름변경"
          className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 w-32 rounded-full my-10 mx-auto`}
        />
      </form>
      <div className={`text-center`}>
        <Link to="/">
          <button
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 w-32 rounded-full`}
            onClick={onLogOutClick}
          >
            Log out
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProFile;
