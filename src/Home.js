import React from "react";
import { withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Welcome to my Portofolio</h1>
    </div>
  );
};

export default withRouter(Home);
