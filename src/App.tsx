import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useCheckUser from "hooks/useCheckUser";
import Auth from "pages/Auth/Auth";
import Home from "pages/Home/Home";
import Nav from "components/Nav";
import Profile from "pages/Profile/Profile";

function App() {
  const { init, isLoggedIn, userObj } = useCheckUser();

  return (
    <body
      className={`bg-neutral-100 mt-24 mx-auto flex flex-col justify-center items-center`}
    >
      {init ? (
        <Router>
          {isLoggedIn && <Nav userObj={userObj} />}
          <Routes>
            <Route path="/profile" element={<Profile userObj={userObj} />} />
            <Route
              path="/"
              element={isLoggedIn ? <Home userObj={userObj} /> : <Auth />}
            ></Route>
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </body>
  );
}

export default App;
