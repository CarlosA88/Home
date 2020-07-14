import React from "react";
import "./App.css";
import SignIn from "./SingIn";
import ButtonAppBar from "./Appbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { AuthProvider } from "./Auth";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <AuthProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthProvider>

      {/* <SignIn /> */}
    </div>
  );
}

export default App;
