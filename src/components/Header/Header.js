import "./Header.scss";
import scribble from "../../images/Abstract Design.svg";
import scribble2 from "../../images/Abstract Design inverted.svg";
import demoIcon from "../../images/Demo Icon.svg";
import arrow from "../../images/Arrow.svg";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function Header()
{
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => setPath(window.location.pathname), []);

  return <header className="header">
    <div className="header__banner">
      <div className="header__banner-container">
        <img className="header__scribble" src={scribble} alt="scribble"/>
        <NavLink className="header__banner-link" to="#">
          <img className="header__demo-icon" src={demoIcon} alt="icon"/>
          Join Our Personalized Nutrition Demo For Free
          <img className="header__demo-arrow" src={arrow} alt="right arrow"/>
        </NavLink>
        <img className="header__scribble" src={scribble2} alt="scribble"/>
      </div>
    </div>
    <div className="header__nav">
      <img className="header__logo" src={logo} alt="Nutritionist"/>
      <nav className="header__links">
        <NavLink className={`header__link ${path === "/" ? "header__link_selected" : ""}`} to="/" reloadDocument>Home</NavLink>
        <NavLink className={`header__link ${path === "/about" ? "header__link_selected" : ""}`} to="/about" reloadDocument>About</NavLink>
        <NavLink className={`header__link ${path === "/team" ? "header__link_selected" : ""}`} to="/team" reloadDocument>Team</NavLink>
        <NavLink className={`header__link ${path === "/process" ? "header__link_selected" : ""}`} to="/process" reloadDocument>Process</NavLink>
        <NavLink className={`header__link ${path === "/pricing" ? "header__link_selected" : ""}`} to="/pricing" reloadDocument>Pricing</NavLink>
        <NavLink className={`header__link ${path === "/blog" ? "header__link_selected" : ""}`} to="/blog" reloadDocument>Blog</NavLink>
        <NavLink className={"header__contact"} to="/contact" reloadDocument>
          <button className="header__button">Contact Us</button>
        </NavLink>
      </nav>
    </div>
  </header>
}