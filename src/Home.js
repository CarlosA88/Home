import React from "react";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Typography variant="h6" component="h2" align="center">
        Welcome to my Portofolio
      </Typography>
    </div>
  );
};

export default withRouter(Home);
