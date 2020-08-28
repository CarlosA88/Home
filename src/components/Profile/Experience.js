import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router-dom";

const Experience = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/signin" />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Experience component</h1>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://carlosa88.github.io/my-app/"
          >
            My storage page
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://warehouse-e07e8.firebaseapp.com/"
          >
            Warehouse app
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://react-d820c.firebaseapp.com/"
          >
            Nadia's Garden
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactclientpanel-20994.firebaseapp.com/"
          >
            Client's panel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
