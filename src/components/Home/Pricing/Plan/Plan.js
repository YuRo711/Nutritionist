import "./Plan.scss";

export default function Plan(props)
{
  const { data, isYearly } = props;

  return <div className="plan">
    <h3 className="plan__title">{data.name}</h3>
    <p className="plan__save">Save up to 50% off on Yearly Plan</p>
    <p className="plan__text">{data.description}</p>
    <p className="plan__price">
      <b className="plan__price-number">${isYearly ? data.yearly : data.monthly}</b>
      /{isYearly ? "year" : "month"}</p>
    <button className="plan__button">Choose Plan</button>
  </div>
}