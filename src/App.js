import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./SingIn";
import ButtonAppBar from "./Appbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
      </Switch>

      {/* <SignIn /> */}
    </div>
  );
}

export default App;
