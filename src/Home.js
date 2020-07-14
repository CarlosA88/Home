import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button color="inherit">
        <Link onClick={() => auth.signOut()}>Sign out</Link>
      </Button>
    </div>
  );
};

export default Home;
