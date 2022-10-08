import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useCheckUser from "hooks/useCheckUser";
import Auth from "pages/Auth/Auth";
import Home from "pages/Home/Home";
import Nav from "components/Nav";
import Profile from "pages/Profile/Profile";

function App() {
  const { init, isLogin } = useCheckUser();

  return (
    <body
      className={`bg-neutral-100 mt-24 mx-auto flex flex-col justify-center items-center`}
    >
      {init ? (
        <Router>
          {isLogin && <Nav />}
          <Routes>
            <Route path="/profile" element={isLogin && <Profile />} />
            <Route path="/" element={isLogin ? <Home /> : <Auth />}></Route>
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </body>
  );
}

export default App;
