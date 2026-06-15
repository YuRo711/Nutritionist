import "./About.scss";
import AboutContact from "./AboutContact/AboutContact";
import Achievements from "./Achievements/Achievements";
import Story from "./Story/Story";
import Welcome from "./Welcome/Welcome";

export default function About(props) {
  return <main className="about">
    <Welcome/>
    <Story story={props.story}/>
    <Achievements achievements={props.achievements}/>
    <AboutContact/>
  </main>
}