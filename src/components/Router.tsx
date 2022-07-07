import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "components/Nav";
import Profile from "../routes/Profile";

export default function AppRouter({
  isLoggedIn,
  userObj,
}: {
  isLoggedIn: any;
  userObj: any;
}) {
  return (
    <Router>
      {isLoggedIn && <Nav />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/profile" element={<Profile />} />
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
