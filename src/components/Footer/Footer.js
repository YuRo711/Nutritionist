import "./Footer.scss";
import logo from "../../images/Logo.svg";
import arrow from "../../images/arrow-small-up.svg";
import mail from "../../images/mail.svg";
import phone from "../../images/phone.svg";
import geo from "../../images/geo.svg";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function Footer(props) {
  const { isMobile } = props;

  return <footer className="footer">
    <div className="footer__nav">
      <img className="footer__logo" src={logo} alt="Nutritionist"/>
      {
      isMobile ?
      <div className="footer__up">
        <p className="footer__up-text">Go To Top</p>
        <button className="footer__up-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
          <img className="footer__up-arrow" src={arrow} alt="arrow up"/>
        </button>
      </div> : ""
      }
      <nav className="footer__links">
        <NavLink className={`footer__link`} to="/" reloadDocument>Home</NavLink>
        <NavLink className={`footer__link`} to="/about" reloadDocument>About</NavLink>
        <NavLink className={`footer__link`} to="/team" reloadDocument>Team</NavLink>
        <NavLink className={`footer__link`} to="/process" reloadDocument>Process</NavLink>
        <NavLink className={`footer__link`} to="/pricing" reloadDocument>Pricing</NavLink>
        <NavLink className={`footer__link`} to="/blog" reloadDocument>Blog</NavLink>
        <NavLink className={`footer__link`} to="/contact" reloadDocument>Contact</NavLink>
      </nav>
      {
      isMobile ? "" :
      <div className="footer__up">
        <p className="footer__up-text">Go To Top</p>
        <button className="footer__up-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
          <img className="footer__up-arrow" src={arrow} alt="arrow up"/>
        </button>
      </div>
      }
    </div>
    <div className="footer__contacts">
      <div className="footer__contact">
        <img className="footer__icon" src={mail} alt="mail"/>
        <p className="footer__contact-text">hello@squareup.com</p>
      </div>
      <div className="footer__contact">
        <img className="footer__icon" src={phone} alt="phone"/>
        <p className="footer__contact-text">+91 91813 23 2309</p>
      </div>
      <div className="footer__contact">
        <img className="footer__icon" src={geo} alt="geo"/>
        <p className="footer__contact-text">Somewhere in the World</p>
      </div>
      <p className="footer__copyright">© 2023 Nutritionist. All rights reserved.</p>
    </div>
  </footer>
}