import React from "react";
import Album from "../../components/Album";

function AlbumsPage({ match }) {
  return (
    <>
      <h2>Render the contents of an album in here</h2>
      <Album />
    </>
  );
}

export default AlbumsPage;
