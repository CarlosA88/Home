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
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { theme } from "./components/ui/Theme";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import Education from "./components/Profile/Education";
import Experience from "./components/Profile/Experience";
import Skill from "./components/Profile/Skill";
import Expertise from "./components/Profile/Expertise";
import PageNotFound from "./PageNotFound";
import Header from "./components/ui/Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ButtonAppBar />
          <header className="App-header">
            <Header />
          </header>
          <Container className={classes.root} fixed>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/userprofile" component={UserProfile} />
                <Route path="/experience" component={Experience} />
                <Route path="/education" component={Education} />
                <Route path="/skill" component={Skill} />
                <Route path="/expertise" component={Expertise} />
                <Route component={PageNotFound} />
              </Switch>
            </Grid>
          </Container>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
