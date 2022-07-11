import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ userObj }: { userObj: any }) {
  if (userObj.displayName === null) {
    const name = userObj.email.split("@")[0];
    userObj.displayName = name;
  }
  return (
    <nav>
      <div>
        <img alt={"새"} src="bird1.png" />
        <div className={`flex justify-between mt-4`}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/profile">{userObj.displayName}의 Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
