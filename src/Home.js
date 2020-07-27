import React from "react";
import { withRouter } from "react-router-dom";

const Home = () => {
  const multiplyBy = function (num1) {
    return function (num2) {
      return num1 * num2;
    };
  };
  const multiplyByTwo = multiplyBy(2);
  const multiplyByFive = multiplyBy(5);
  console.log(multiplyByFive(9));

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Welcome to my Portfolio</h1>
    </div>
  );
};

export default withRouter(Home);
