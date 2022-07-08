import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { authService, dbService } from "fbase";

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
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <Link to="/">
        <button onClick={onLogOutClick}>Log out</button>
      </Link>
    </>
  );
};

export default ProFile;
