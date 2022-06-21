import React from "react";
import { Redirect } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Redirect to="/" replace />;
  }
  return children;
};
export default Protected;
