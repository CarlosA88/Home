import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" className="navLink" style={{ color: "white" }}>
              <MenuIcon />
            </Link>{" "}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Arc development
          </Typography>

          <Button color="inherit">
            <Link
              to="/userprofile"
              className="navLink"
              style={{ color: "white" }}
            >
              User settings
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/signin" style={{ color: "white" }}>
              Login
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/signup" style={{ color: "white" }}>
              SingUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
