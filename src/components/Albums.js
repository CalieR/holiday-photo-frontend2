import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AlbumPage from "../pages/album/AlbumPage";

function Albums(props) {

  return (
    <>
      <h1>Display the user's albums here once they are logged in</h1>
      <div className="albumLinks">
        {props.myAlbums.map(album => (
          <Link to={`/albums/${album.id}`} key={album.id}>
            {album.name}
          </Link>
        ))}
      </div>
      <div className="albumTabs">
        <Switch>
          <Route
            path="/albums/:id"
            render={({ match }) => <AlbumPage albumId={match.params.id} />}
          />
        </Switch>
      </div>

    </>
  );
}

// if you click on an album name, it should render the album page with a list of photos.

export default Albums;


