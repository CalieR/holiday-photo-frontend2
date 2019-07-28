import React, { Component } from "react";

class Home extends Component {
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
