import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Route, Redirect } from "react-router-dom";

//We pass the auth user to our app
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext); // 😄 we use the context hook to provide with our user auth
  debugger;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/signin"} />
        )
      }
    />
  );
};

export default PrivateRoute;
