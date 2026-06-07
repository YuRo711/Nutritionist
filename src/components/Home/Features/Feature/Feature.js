import "./Feature.scss";

export default function Feature(props) {
  const { data } = props;

  return <div className="feature">
    <div className="feature__header">
      <img className="feature__icon" src={data.image} alt={data.title}/>
      <h3 className="feature__title">{data.title}</h3>
    </div>
    <p className="feature__text">{data.text}</p>
  </div>
}