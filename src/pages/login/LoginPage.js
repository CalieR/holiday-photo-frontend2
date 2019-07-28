import React, { Component } from "react";
import Login from "../../components/Login";

class LoginPage extends Component {
  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  onLogin = (username, password) => {
    console.log(username, password);
  };

  render() {
    return (
      <>
        <h2>Login form</h2>
        <Login />
      </>
    );
  }
}

export default LoginPage;
