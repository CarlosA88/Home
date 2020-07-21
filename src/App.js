import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import SignIn from "./SingIn";
import ButtonAppBar from "./Appbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { AuthProvider } from "./Auth";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
//Adding theme
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/ui/Theme";
import { CssBaseline } from "@material-ui/core";

function App() {
  function multiply(a, b) {
    return a * b;
  }
  let multiplyByTwo = multiply.bind(2, 4);
  console.log(multiplyByTwo);

  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ButtonAppBar />
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ textAlign: "center" }}
            />
          </header>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/userprofile" component={UserProfile} />
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
