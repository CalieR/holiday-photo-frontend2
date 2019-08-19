import React from "react";

// either the title or the thumbnail should be clickable, routing to large image

function Album(props) {
  return (
    <>
      <h4>{props.photo.title}</h4>
      <img src={props.photo.image_url} alt={props.photo.description} width="200" ></img>
    </>

  );
}
export default Album;
