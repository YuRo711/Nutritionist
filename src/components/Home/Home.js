import Blogs from "./Blogs/Blogs";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import "./Home.scss";

export default function Home(props) {
  return <main className="home">
    <Hero/>
    <Features features={props.features}/>
    <Blogs blogs={props.blogs}/>
  </main>
}