import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProFile = () => {
  const auth = getAuth();
  const onLogOutClick = (event: React.MouseEvent) => {
    auth.signOut();
  };
  return (
    <Link to="/">
      <button onClick={onLogOutClick}>Log out</button>
    </Link>
  );
};
export default ProFile;
