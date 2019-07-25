import React from "react";
import Login from "../../components/Login";

const onLogin = (username, password) => {
  console.log(username, password);
};

function LoginPage() {
  return (
    <>
      <h2>Login form</h2>
      <Login loginHandler={onLogin} />
    </>
  );
}

export default LoginPage;
