import React from "react";
import AboutMe from "./AboutMe";

const UserStatus = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <AboutMe />
      ) : (
        <h1>You are not logged in to your account</h1>
      )}
    </div>
  );
};

export default UserStatus;
