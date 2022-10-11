import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

export default function Nav() {
  const onLogOutClick = () => {
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
          <Link to="/">
            <button className={`hover:text-yellow-500`} onClick={onLogOutClick}>
              Log out
            </button>
          </Link>
        </div>
      </article>
    </nav>
  );
}
