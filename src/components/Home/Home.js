import Blogs from "./Blogs/Blogs";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import "./Home.scss";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";

export default function Home(props) {
  return <main className="home">
    <Hero isMobile={props.isMobile} isLaptop={props.isLaptop}/>
    <Features features={props.features}/>
    <Blogs blogs={props.blogs}/>
    <Testimonials reviews={props.reviews} isMobile={props.isMobile} isLaptop={props.isLaptop}/>
    <Pricing plans={props.plans}/>
  </main>
}