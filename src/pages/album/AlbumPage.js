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
    index.getAlbumPhotos(albumId).then(data => {
      this.setState({
        albumPhotos: data.album.photos
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.albumId !== prevProps.albumId) {
      this.getAlbumPhotos(this.props.albumId)
    }
  }

  render() {
    return (
      <>
        <h2>Render the contents of an album in here</h2>
        {this.state.albumPhotos.map(photo => (
          <Album key={photo.id} photo={photo} />)
        )}

      </>
    );
  }
}

export default AlbumPage;
