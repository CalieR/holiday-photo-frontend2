import React from "react";
import { Button } from "semantic-ui-react";
import index from "../services/api/auth/index";

function Logout() {
  return <Button onClick={index.logout}>Log out</Button>;
}

export default Logout;
