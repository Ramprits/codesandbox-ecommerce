import React from "react";
import "./header.styles.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <NavLink to="/" className="logo-container">
        <img
          width="50"
          src="https://res.cloudinary.com/rps-technologies/image/upload/v1566496712/NaTours/logo-green-1x.png"
          alt="logo"
        />
      </NavLink>
      <section className="options">
        <NavLink to="/shop" className="option">
          Shop
        </NavLink>
        <NavLink to="/contact" className="option">
          Contact
        </NavLink>
      </section>
    </section>
  );
};

export default Header;
