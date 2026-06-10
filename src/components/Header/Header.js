import "./Header.scss";
import scribble from "../../images/Abstract Design.svg";
import scribble2 from "../../images/Abstract Design inverted.svg";
import scribbleMobile from "../../images/Abstract Design mobile.svg";
import scribbleMobile2 from "../../images/Abstract Design mobile reverse.svg";
import demoIcon from "../../images/Demo Icon.svg";
import arrow from "../../images/Arrow.svg";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

export default function Header()
{
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => setPath(window.location.pathname), []);
  const [isMobile, setIsMobile] = useState(window.screen.width < 600);
  useEffect(() => {
    setIsMobile(window.screen.width < 600);
  }, [window.screen.width]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return <header className="header">
    <div className="header__banner">
      { isMobile ? <img className="header__scribble" src={scribbleMobile} alt="scribble"/> : "" }
      <div className="header__banner-container">
        { isMobile ? "" : <img className="header__scribble" src={scribble} alt="scribble"/> }
        <NavLink className="header__banner-link" to="#">
          <img className="header__demo-icon" src={demoIcon} alt="icon"/>
          Join Our Personalized Nutrition Demo For Free
          <img className="header__demo-arrow" src={arrow} alt="right arrow"/>
        </NavLink>
        { isMobile ? "" : <img className="header__scribble" src={scribble2} alt="scribble"/> }
      </div>
      { isMobile ? <img className="header__scribble" src={scribbleMobile2} alt="scribble"/> : "" }
    </div>
    <div className="header__nav">
      <img className="header__logo" src={logo} alt="Nutritionist"/>
      {
      isMobile ? 
      <button className="header__menu-button" onClick={() => setMenuOpen(!isMenuOpen)}/> :
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
      }
    </div>
    {
      isMobile ? <Menu isOpen={isMenuOpen}/> : ""
    }
  </header>
}