import "./ProcessStep.scss";

export default function ProcessStep(props) {
  const { data, number } = props;

  return <div className="process-step">
    <h4 className="process-step__number">{('0' + number).substr(-2)}</h4>
    <div className="process-step__container">
      <div className="process-step__header">
        <img className="process-step__icon" src={data.image} alt={data.title}/>
        <h3 className="process-step__title">{data.title}</h3>
      </div>
      <p className="process-step__text">{data.text}</p>
    </div>
  </div>
}