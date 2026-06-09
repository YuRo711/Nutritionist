import Blogs from "./Blogs/Blogs";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import "./Home.scss";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";

export default function Home(props) {
  return <main className="home">
    <Hero/>
    <Features features={props.features}/>
    <Blogs blogs={props.blogs}/>
    <Testimonials reviews={props.reviews}/>
    <Pricing plans={props.plans}/>
  </main>
}