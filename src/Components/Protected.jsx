import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserStatusContext } from "./OnAuthStateC";

const Protected = (prop) => {
  const { Component } = prop;
  const { user } = useContext(UserStatusContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
