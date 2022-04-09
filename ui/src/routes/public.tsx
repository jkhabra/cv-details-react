import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { ROUTE_CONSTANTS } from "../utils";
import SignInScreen from "../pages/public/authentication/signIn";
import CvDetails from "../pages/public/cvDetails";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<SignInScreen />} />
        <Route path={ROUTE_CONSTANTS.ROOT} element={<CvDetails />} />

        <Route path="*" element={<Navigate to={ROUTE_CONSTANTS.ROOT} />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
