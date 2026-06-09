import "./Hero.scss";
import hero from "../../../images/Hero.png";
import customer1 from "../../../images/Customer 1.png";
import customer2 from "../../../images/Customer 2.png";
import customer3 from "../../../images/Customer 3.png";
import { NavLink } from "react-router";

export default function Hero() {
  return <section className="hero" id="hero">
    <img className="hero__image" src={hero} alt="A woman smiling"/>
    <div className="hero__main">
      <h2 className="hero__subtitle">Transform Your ❤️ Health with</h2>
      <h1 className="hero__title">Personalized Nutrition Coaching</h1>
      <p className="hero__text">
        Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. 
        Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans 
        and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.
      </p>
      <div className="hero__buttons">
        <NavLink className="hero__link" to="#">
          <button className="hero__button">Get Started Today</button>
        </NavLink>
        <NavLink className="hero__link" to="#">
          <button className="hero__button hero__button_demo">Book a Demo</button>
        </NavLink>
      </div>
      <div className="hero__customers">
        <div className="hero__customers-container">
          <img className="hero__customer" src={customer1} alt="customer"/>
          <img className="hero__customer" src={customer2} alt="customer"/>
          <img className="hero__customer" src={customer3} alt="customer"/>
        </div>
        <p className="hero__customers-text"><b className="hero__customers-bold">430+</b> Happy Customers</p>
      </div>
    </div>
  </section>
}