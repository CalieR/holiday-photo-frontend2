import React, { Component } from "react";
import Albums from "../../components/Albums";
import Logout from "../../components/Logout";
import index from "../../services/api/user/index";

class AlbumsPage extends Component {
  state = {
    myAlbums: []
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    index.getUserProfile().then(user => {
      this.setState({
        myAlbums: user.albums
      });
    });
  };

  render() {
    return (
      <>
        <Albums myAlbums={this.state.myAlbums} />;
        <Logout />
      </>
    );
  }
}

export default AlbumsPage;
