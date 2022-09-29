import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "components/Nav";
import Profile from "../routes/Profile";

import useCheckUser from "hooks/useCheckUser";

export default function AppRouter() {
  const { isLoggedIn, userObj } = useCheckUser();
  return (
    <Router>
      {isLoggedIn && <Nav userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/profile" element={<Profile userObj={userObj} />} />
            <Route path="/" element={<Home userObj={userObj} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
