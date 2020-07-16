import React from "react";
import { Button } from "@material-ui/core";
import { signOut } from "./Functions";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div>
      <Button color="inherit">
        <Link
          onClick={signOut}
          style={{ color: "white", textTransform: "none" }}
        >
          SignOut
        </Link>
      </Button>
    </div>
  );
};

export default SignOut;
