import React from "react";

import { Grid, Form, Button } from "semantic-ui-react";

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

function Login(props) {
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
            onChange={props.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={props.handleChange}
          />
        </Form.Field>

        <Button color="teal" onClick={props.handleLogin}>
          Log In
        </Button>
      </Form>
    </Grid>
  );
}

export default Login;
