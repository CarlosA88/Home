import React from "react";
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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ButtonAppBar />
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
