import "./Milestone.scss";

export default function Milestone(props) {
  const { data } = props;

  return <div className="milestone">
    <img className="milestone__image" src={data.image} alt={data.title}/>
    <div className="milestone__main">
      <h3 className="milestone__title">{data.title}</h3>
      <p className="milestone__text">{data.text}</p>
      <p className="milestone__date">{data.date}</p>
    </div>
  </div>
}