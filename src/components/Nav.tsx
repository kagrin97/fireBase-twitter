import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

import useCheckUser from "hooks/useCheckUser";
import { userObjHandler } from "util/userObjHandler";

export default function Nav() {
  const { userObj, authStateChangedHandler } = useCheckUser();

  useEffect(() => {
    userObjHandler.setDisplayName(userObj);
    userObjHandler.setDefaultAvatar(userObj);
  }, [userObj]);

  const onLogOutClick = async (event: React.MouseEvent) => {
    await authService.signOut();
    authStateChangedHandler();
  };

  return (
    <nav>
      <article>
        <img alt={"새"} src="bird1.png" />

        <div className={`flex justify-between my-4`}>
          <div>
            <Link className={`hover:text-yellow-500`} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={`hover:text-yellow-500`} to="/profile">
              Profile
            </Link>
          </div>
        </div>

        <div className={`flex flex-col mb-8`}>
          <div className={`flex `}>
            <img
              src={userObj.photoURL}
              alt="프로필 사진"
              className={`rounded-full w-8 h-8 mr-4`}
            />
            <span>{userObj.displayName}</span>
          </div>
          <div className={`text-center`}>
            <Link to="/">
              <button
                className={`bg-green-400 hover:bg-green-700 text-white font-bold w-20 rounded-full mt-2`}
                onClick={onLogOutClick}
              >
                Log out
              </button>
            </Link>
          </div>
        </div>
      </article>
    </nav>
  );
}
