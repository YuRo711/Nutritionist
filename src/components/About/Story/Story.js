import Milestone from "./Milestone/Milestone";
import "./Story.scss";

export default function Story(props) {
  return <section className="section" id="story">
    <h2 className="section__title">Our Story</h2>
    <p className="section__subtitle">
      Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey.
    </p>
    <div className="story__milestones">
    {
      props.story.map((milesone, i) => <Milestone data={milesone} key={`milestone-${i}`}/>)
    }
    </div>
  </section>
}