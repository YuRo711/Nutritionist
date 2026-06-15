import "./Achievement.scss";

export default function Achievement(props) {
  const { data } = props;

  return <div className="achievement">
    <div className="achievement__header">
      <img className="achievement__icon" src={data.image} alt={data.title}/>
      <h3 className="achievement__title">{data.title}</h3>
    </div>
    <p className="achievement__text">{data.text}</p>
  </div>
}