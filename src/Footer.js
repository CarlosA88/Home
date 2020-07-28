import React from "react";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "fixed",
    bottom: 0,
    // zIndex: 1302,
    // position: "relative",
  },
  icons: {
    color: "white",
  },
  mainContainer: {
  

  },
}));
const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container className={classes.mainContainer}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.footer}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon className={classes.icons} />}
          />
        </BottomNavigation>
      </Grid>
    </div>
  );
};

export default Footer;
