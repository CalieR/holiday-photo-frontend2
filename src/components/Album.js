import React from "react";

function Album(props) {
  return (
    <>
      <h4>{props.photo.title}</h4>
      <img src={props.photo.image_url} alt={props.photo.description} width="200" ></img>
    </>

  );
}
export default Album;
