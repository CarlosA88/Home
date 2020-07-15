import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import {
  getProfileData,
  signOut,
  updateProfile,
  verifyUser,
  resetPassword,
  deleteUser,
} from "./Functions";
import { AuthContext } from "./Auth";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>User settings</h1>
      <Button color="inherit">
        <Link onClick={signOut}>Sign out</Link>
      </Button>
      {/* <Button color="inherit">
        <Link onClick={getProfileData}>Get profile data</Link>
      </Button>
      <Button color="inherit">
        <Link onClick={updateProfile}>Update Display Name</Link>
      </Button> */}
      <Button color="inherit">
        <Link onClick={verifyUser}>Verify user email</Link>
      </Button>
      <Button color="inherit">
        <Link onClick={resetPassword}>Reset password</Link>
      </Button>
    </div>
  );
};

export default UserProfile;
