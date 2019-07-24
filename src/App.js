import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Topics from "./components/Topics";

// homepage looks like random background, has header with login/signup clickable links

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

export default App;
