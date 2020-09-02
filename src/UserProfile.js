import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import {
  // getProfileData,
  verifyUser,
  resetPassword,
  // updateProfile,
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
      <h1>User Settings Options</h1>
      <ul>
        <li>
          <Button color="inherit">
            <Link onClick={deleteUser}>Delete User</Link>
          </Button>
        </li>
        <li>
          <Button color="inherit">
            <Link onClick={verifyUser}>Verify user email</Link>
          </Button>
        </li>
        <li>
          <Button color="inherit">
            <Link onClick={resetPassword}>Reset password</Link>
          </Button>
        </li>
      </ul>

      {/* <Button color="inherit">
        <Link onClick={getProfileData}>Get profile data</Link>
      </Button>
      <Button color="inherit">
        <Link onClick={updateProfile}>Update Display Name</Link>
      </Button> */}
    </div>
  );
};

export default UserProfile;
