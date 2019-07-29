import React, { Component } from "react";
import Login from "../../components/Login";
import index from "../../services/api/auth/index";

class LoginPage extends Component {
  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    index.login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(
          "You have entered the wrong username or password.  Please check your details and try again"
        );
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ logged_in: true, username: data.username });
        this.props.history.push("/albums");
      }
    });
  };

  render() {
    return (
      <>
        <h2>Login form</h2>
        <Login
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
        />
      </>
    );
  }
}

export default LoginPage;
