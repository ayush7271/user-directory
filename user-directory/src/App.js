// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getUserDetailsRequest } from "./slice/userListSlice";
import { UserDetails } from "./components/UserDetails";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetailsRequest());
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UserDetails />
            </>
          }
        ></Route>
        <Route path="/" element={<></>}></Route>
      </Routes>
    </>
  );
};

export default App;
