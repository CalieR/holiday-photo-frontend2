import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./pages/login/LoginPage";
import AlbumsPage from "./pages/albums/AlbumsPage";

// homepage looks like random background
// header with login/signup clickable links

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <AuthenticatedRoute path="/albums" component={AlbumsPage} />
        </Switch>
      </Router>
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;

