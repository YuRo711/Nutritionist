import "./About.scss";
import Achievements from "./Achievements/Achievements";
import Story from "./Story/Story";
import Welcome from "./Welcome/Welcome";
import Call from "../Call/Call";

export default function About(props) {
  return <main className="about">
    <Welcome/>
    <Story story={props.story} isMobile={props.isMobile}/>
    <Achievements achievements={props.achievements}/>
    <Call title="We Are Proud of Our Achievements" button="Book a Demo"
      text="But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being."
    />
  </main>
}