import Review from "./Review/Review";
import "./Testimonials.scss";
import left from "../../../images/left.svg";
import right from "../../../images/right.svg";
import { useEffect, useState } from "react";

export default function Testimonials(props) {
  const { reviews } = props;
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.screen.width < 600);
  const [isLaptop, setIsLaptop] = useState(window.screen.width <= 1600 && window.screen.width >= 600);
  console.log(window.screen.width)
  useEffect(() => {
    setIsLaptop(window.screen.width <= 1600 && window.screen.width >= 600);
    setIsMobile(window.screen.width < 600);
  }, [window.screen.width]);

  return <section className="section" id="testimonials">
    <h2 className="section__title">Our Testimonials</h2>
    <p className="section__subtitle">
      Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
    </p>
    <div className="testimonials__container">
      <div className="testimonials__reviews" 
        style={{left: `calc((${isMobile ? 12 : isLaptop ? 140 : 304}px - 100vw) * ${page})`}}>
      {
        reviews.map((review, i) => <Review data={review} key={`review-${i}`}/>)
      }
      </div>
    </div>
    <div className="testimonials__scroll">
      <button className="testimonials__scroll-button" 
        onClick={() => setPage(Math.max(page - 1, 0))}>
        <img className="testimonials__arrow" src={left} alt="left"/>
      </button>
      <div className="testimonials__pages">
      {
        reviews.map((review, i) => {
          if (isMobile || i % 3 == 0)
            return <div key={`dot-${i}`}
              className={`testimonials__page-dot 
                ${!isMobile && i / 3 === page || isMobile && i == page ? "testimonials__page-dot_selected" : ""}`}/>
        })
      }
      </div>
      <button className="testimonials__scroll-button" 
        onClick={() => setPage(Math.min(page + 1, isMobile ? reviews.length - 1 : reviews.length / 3 - 1))}>
        <img className="testimonials__arrow" src={right} alt="right"/>
      </button>
    </div>
  </section>
}