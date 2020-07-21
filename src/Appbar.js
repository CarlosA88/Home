import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import {
  useScrollTrigger,
  CssBaseline,
  Tabs,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { AuthContext } from "./Auth";
//Drawer
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { signOut } from "./Functions";
import CodeIcon from "@material-ui/icons/Code";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tabContainerRight: {
    marginRight: "auto",
  },
  tabs: {
    textTransform: "none",
    minWidth: 125,
    height: 70,
  },
  tabsLinks: {
    color: "white",
    textDecoration: "none",
    fontSize: 17,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    // ...theme.typography.tabs,
    color: "white",
  },
  CodeIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { currentUser } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabs = (
    <>
      {currentUser ? (
        <>
          <Button className={classes.tabs}>
            <Link to="/experience" className={classes.tabsLinks}>
              Experience
            </Link>
          </Button>
          <Button className={classes.tabs}>
            <Link to="/education" className={classes.tabsLinks}>
              Education
            </Link>
          </Button>
          <Button className={classes.tabs}>
            <Link to="/skill" className={classes.tabsLinks}>
              Skills
            </Link>
          </Button>
          <Button className={classes.tabs}>
            <Link to="/expertise" className={classes.tabsLinks}>
              Expertise
            </Link>
          </Button>

          <Button className={classes.tabs}>
            <Link onClick={signOut} to="" className={classes.tabsLinks}>
              Sign Out
            </Link>
          </Button>
          <Button className={classes.tabs}>
            <Link to="/userprofile" className={classes.tabsLinks}>
              User settings
            </Link>
          </Button>
        </>
      ) : (
        <>
          <Button className={classes.tabs}>
            <Link to="/signin" className={classes.tabsLinks}>
              Sign In
            </Link>
          </Button>

          <Button className={classes.tabs}>
            <Link to="/signup" className={classes.tabsLinks}>
              Sing Up
            </Link>
          </Button>
        </>
      )}
    </>
  );
  //Smallers screens
  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {currentUser ? (
          <>
            <List disablePadding>
              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Home
                </ListItemText>
              </ListItem>
              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/experience"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Experience
                </ListItemText>
              </ListItem>
              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/education"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Education
                </ListItemText>
              </ListItem>
              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/skill"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Skills
                </ListItemText>
              </ListItem>
              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/expertise"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Expertise
                </ListItemText>
              </ListItem>

              <ListItem
                divider
                button
                component={Link}
                onClick={() => {
                  setOpenDrawer(false);
                  signOut();
                }}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  Sign Out
                </ListItemText>
              </ListItem>

              <ListItem
                divider
                button
                component={Link}
                onClick={() => setOpenDrawer(false)}
                to="/userprofile"
                disableTypography={false}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography={false}
                >
                  User settings
                </ListItemText>
              </ListItem>
            </List>
          </>
        ) : (
          <List>
            <ListItem
              divider
              button
              component={Link}
              onClick={() => setOpenDrawer(false)}
              to="/signin"
              disableTypography={false}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography={false}
              >
                Sign In
              </ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              onClick={() => setOpenDrawer(false)}
              to="/signup"
              disableTypography={false}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography={false}
              >
                Sign Up
              </ListItemText>
            </ListItem>
          </List>
        )}
      </SwipeableDrawer>
      <IconButton
        className={classes.menuIcon}
        onClick={() => setOpenDrawer(!openDrawer)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton component={Link} to="/">
              <CodeIcon className={classes.CodeIcon} to="/" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Carlos A Avilez J.
            </Typography>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </div>
  );
}
