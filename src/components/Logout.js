import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";

// does this component need to be given history props?

class Logout extends Component {
  state = {
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return <Button onClick={this.logout}>Log out</Button>;
  }
}

export default Logout;
