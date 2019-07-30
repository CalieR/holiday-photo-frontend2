import React from "react";

function Albums(props) {
  return (
    <>
      <h1>Display the user's albums here once they are logged in</h1>
      {props.myAlbums.map(album => (
        <p key={album.id}>{album.name}</p>
      ))}
    </>
  );
}

export default Albums;
