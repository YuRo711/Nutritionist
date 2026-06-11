import "./Blog.scss";
import { NavLink } from "react-router";

export default function Blog(props) {
  const { data } = props;

  return <NavLink className="blog" to="#">
    <img className="blog__image" src={data.image} alt={data.title}/>
    <p className="blog__category">{data.category}</p>
    <h3 className="blog__title">{data.title}</h3>
    <p className="blog__text">{data.description}</p>
    <div className="blog__footer">
      <div className="blog__footer-info">
        <img className="blog__author-image" src={data.author.image} alt={data.author.name}/>
        <div className="blog__footer-text">
          <h4 className="blog__author">{data.author.name}</h4>
          <p className="blog__info">{data.date} - {data.length} min read</p>
        </div>
      </div>
      <div className="blog__buttons">
        <button className="blog__button blog__button_like"/>
        <button className="blog__button blog__button_save"/>
      </div>
    </div>
  </NavLink>
}
