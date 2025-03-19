import React from "react";
import logo from "../../assets/img/logo_transparent.png";
import "./header.css";

function Header() {
  return (
    <>
      <header id="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </header>
    </>
  );
}

export default Header;
