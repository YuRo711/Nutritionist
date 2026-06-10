import "./Menu.scss";
import { NavLink } from "react-router";

export default function Menu(props) {
  const { isOpen } = props;

  return <nav className={`menu ${isOpen ? "menu_open" : ""}`}>
    <NavLink className={`menu__link`} to="/" reloadDocument>Home</NavLink>
    <NavLink className={`menu__link`} to="/about" reloadDocument>About</NavLink>
    <NavLink className={`menu__link`} to="/team" reloadDocument>Team</NavLink>
    <NavLink className={`menu__link`} to="/process" reloadDocument>Process</NavLink>
    <NavLink className={`menu__link`} to="/pricing" reloadDocument>Pricing</NavLink>
    <NavLink className={`menu__link`} to="/blog" reloadDocument>Blog</NavLink>
    <NavLink className={`menu__link`} to="/contact" reloadDocument>Contact</NavLink>
  </nav>
}