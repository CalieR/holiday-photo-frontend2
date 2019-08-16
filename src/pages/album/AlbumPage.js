import React, { Component } from "react";
import Album from "../../components/Album";
import index from "../../services/api/albums/index.js";

class AlbumPage extends Component {
  state = {
    albumPhotos: []
  };


  componentDidMount() {
    const { albumId } = this.props;
    this.getAlbumPhotos(albumId);
  }

  getAlbumPhotos = albumId => {
    index.getAlbumPhotos(albumId);
  }

  render() {
    return (
      <>
        <h2>Render the contents of an album in here</h2>
        <Album albumPhotos={this.state.albumPhotos} />
      </>
    );
  }
}

export default AlbumPage;
