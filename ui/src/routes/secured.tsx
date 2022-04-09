import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { ROUTE_CONSTANTS } from "../utils";


const AuthRouter = () => {
  return (
    <>
      <Routes>

        <Route path="*" element={<Navigate to={ROUTE_CONSTANTS.DASHBOARD} />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
