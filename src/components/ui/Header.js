import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default Header;
