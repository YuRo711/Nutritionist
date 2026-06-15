import "./AboutContact.scss";
import scribble from "../../../images/about scribble.svg";
import logo from "../../../images/about logo.svg";

export default function AboutContact() {
  return <section className="section" id="about-contact">
    <div className="about-contact">
      <div className="about-contact__main">
        <h2 className="about-contact__title">We Are Proud of Our Achievements</h2>
        <p className="about-contact__text">
          But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.
        </p>
      </div>
      <button className="about-contact__button">Book a demo</button>
      <img className="about-contact__scribble" src={scribble} alt="scribble"/>
      <img className="about-contact__logo" src={logo} alt="Nutritionist logo"/>
    </div>
  </section>
}