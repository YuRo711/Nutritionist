import "./Call.scss";
import scribble from "../../images/about scribble.svg";
import logobg from "../../images/about logo.svg";

export default function Call(props) {
  return <section className="section">
    <div className="call">
    <div className="call__main">
      <h2 className="call__title">{props.title}</h2>
      <p className="call__text">{props.text}</p>
    </div>
    <button className="call__button">{props.button}</button>
    <img className="call__scribble" src={scribble} alt="scribble"/>
    <img className="call__logo" src={logobg} alt="Nutritionist logo"/>
  </div>
  </section>
}