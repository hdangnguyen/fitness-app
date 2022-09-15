import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export const publicRoute = [
  {
    path: "login",
    name: "login",
    component: LoginPage,
    exact: true,
    restrict: true,
  },
];

const IndexRounter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default IndexRounter;
