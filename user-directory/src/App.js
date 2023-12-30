// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getUserDetailsRequest } from "./slice/userListSlice";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetails";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <User />
            </>
          }
        ></Route>
        <Route
          path="/:id"
          element={
            <>
              <UserDetails />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
