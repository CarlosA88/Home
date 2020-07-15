import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect, withRouter } from "react-router-dom";

import { AuthContext } from "./Auth";

const Home = () => {

  return (
    <div>
      <h1>Home page</h1>
   
      {/* <Button color="inherit">
        <Link onClick={deleteUser}>Delete user</Link>
      </Button> */}
    </div>
  );
};

export default withRouter(Home);
