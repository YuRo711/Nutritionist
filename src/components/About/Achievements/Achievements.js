import Achievement from "./Achievement/Achievement";
import "./Achievements.scss";

export default function Achievements(props) {
  return <section className="section">
    <h2 className="section__title">Company Achievements</h2>
    <p className="section__subtitle">
      At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements.
    </p>
    <div className="achievements__grid">
    {
      props.achievements.map((achievement, i) => <Achievement data={achievement} key={`achievement-${i}`}/>)
    }
    </div>
  </section>
}