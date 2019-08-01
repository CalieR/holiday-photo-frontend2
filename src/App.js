import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./pages/login/LoginPage";
import Signup from "./components/Signup";
import AlbumsPage from "./pages/albums/AlbumsPage";
import Topics from "./components/Topics";

// homepage looks like random background
// header with login/signup clickable links

function App() {
  return (
    <>
      <Router>
      <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/signup" component={Signup} />
        <AuthenticatedRoute path="/albums" component={AlbumsPage} />
        <Route path="/topics" component={Topics} />
      </Router>
    </>
  );
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
