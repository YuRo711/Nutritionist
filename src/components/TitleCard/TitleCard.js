import "./TitleCard.scss";
import logo from "../../images/team logo.svg";
import bg from "../../images/team bg.png";

export default function TitleCard(props) {
  const { title, text } = props;

  return <div className="title-card">
    <img className="title-card__bg" src={bg} alt="abstract background"/>
    <div className="title-card__info">
      <img className="title-card__logo" src={logo} alt="Nutritionist logo"/>
      <h2 className="section__title section__title_semibold">{title}</h2>
      <p className="title-card__text">{text}</p>
    </div>
  </div>
}