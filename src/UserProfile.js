import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import {
  getProfileData,
  verifyUser,
  resetPassword,
  updateProfile,
  deleteUser,
} from "./functions";
import { AuthContext } from "./Auth";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Settings</h1>

      {/* <Button color="inherit">
        <Link onClick={getProfileData}>Get profile data</Link>
      </Button>
      <Button color="inherit">
        <Link onClick={updateProfile}>Update Display Name</Link>
      </Button> */}
      <Button color="inherit">
        <Link onClick={deleteUser}>Delete User</Link>
      </Button>
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
