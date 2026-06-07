import "./Header.scss";
import scribble from "../../images/Abstract Design.svg";
import scribble2 from "../../images/Abstract Design inverted.svg";
import demoIcon from "../../images/Demo Icon.svg";
import arrow from "../../images/Arrow.svg";
import { NavLink } from "react-router";

export default function Header()
{
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
  </header>
}