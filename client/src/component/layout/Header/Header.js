import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "./Header.css";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};



const Header = () => {
  return (
    <Fragment>
      <ReactNavbar {...options} />
      <NavLink className="navbar-item" activeClassName="is-active" to="/search" exact style={{marginLeft:'20px'}}>
	      Search
      </NavLink>
      <NavLink className="navbar-item" activeClassName="is-active" to="/contact" exact style={{marginLeft:'20px'}}>
	      Contact
      </NavLink>
      <NavLink className="navbar-item" activeClassName="is-active" to="/about" exact style={{marginLeft:'20px'}}>
	      About
      </NavLink>
      <NavLink className="navbar-item" activeClassName="is-active" to="/login" exact style={{marginLeft:'20px'}}>
	      Login
      </NavLink>
    </Fragment>
  );
};

export default Header;
