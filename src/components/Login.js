import React from "react";

import { Grid, Form, Button } from "semantic-ui-react";

// props = {
//   loginHandler: null
// }

// state = {
//   username: "Bob",
//   password: "123434234"
// }

// const defaultLoginHandler = () => {
//   // do nothing
// }

// const onLogin = () => {
//   if (this.props.loginHandler != null) {
//     this.props.loginHandler(this.props.username, this.props.password);
//   } else {
//     defaultLoginHandler()
//   }
// }

function Login() {
  return (
    <Grid centered>
      <Form className="login-signup">
        <Form.Field>
          <input
            autoComplete="off"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Field>

        <Button color="teal">Log In</Button>
      </Form>
    </Grid>
  );
}

export default Login;
