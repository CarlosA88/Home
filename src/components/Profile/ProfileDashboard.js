import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router-dom";


const ProfileDashboard = () => {
  const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Redirect to="/signin" />;
    }

  return <div>Profile Dashboard</div>;
};

export default ProfileDashboard;
