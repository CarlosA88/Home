import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router-dom";

const Education = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Education component</h1>
      {/* <ul>
        {getUser.map((u) => {
          return <li key={u.id}>{u.name}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Education;
