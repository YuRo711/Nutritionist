import "./Review.scss";
import quote from "../../../../images/quote.svg";

export default function Review(props) {
  const { data } = props;
  return <div className="review">
    <img className="review__icon" src={quote} alt="quote marks"/>
    <p className="review__text">{data.review}</p>
    <div className="review__author">
      <img className="review__portrait" src={data.image} alt={data.author}/>
      <p className="review__name">{data.author}</p>
    </div>
  </div>
}