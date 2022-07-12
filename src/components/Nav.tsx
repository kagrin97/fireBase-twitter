import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

export default function Nav({ userObj }: { userObj: any }) {
  if (userObj.displayName === null) {
    const name = userObj.email.split("@")[0];
    userObj.displayName = name;
  }

  if (userObj.photoURL === null) {
    userObj.photoURL =
      "https://firebasestorage.googleapis.com/v0/b/react-twitter-2e61a.appspot.com/o/1.png?alt=media&token=cde89963-3c9e-4e02-9ecc-5abf07dd1491";
  }
  const onLogOutClick = (event: React.MouseEvent) => {
    authService.signOut();
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
