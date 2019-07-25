import React, { Component } from "react";
import api from "../util/api";


class Home extends Component {
  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  // if you refresh the page, a logged in user can still have their stuff displayed
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(
          "You have entered the wrong username or password.  Please check your details and try again"
        );
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ logged_in: true, username: data.username });
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Home page.</h2>
        <h4>Some generic background if not logged in </h4>
        <h4>If logged in display the users profile</h4>
      </div>
    );
  }
}

export default Home;
