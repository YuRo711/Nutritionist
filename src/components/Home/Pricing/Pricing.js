import { useState } from "react";
import "./Pricing.scss";
import Plan from "./Plan/Plan";

export default function Pricing(props) {
  const [isYearly, setIsYearly] = useState(false);
  const { plans } = props;

  return <section className="section" id="pricing">
    <h2 className="section__title">Our pricing</h2>
    <p className="section__subtitle">
      We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources
    </p>
    <div className="pricing__buttons">
      <button className={`pricing__button ${isYearly ? "" : "pricing__button_selected"}`}
        onClick={() => setIsYearly(false)}>Monthly</button>
      <button className={`pricing__button ${isYearly ? "pricing__button_selected" : ""}`}
        onClick={() => setIsYearly(true)}>Yearly</button>
    </div>
    <p className="pricing__save">Save 50% on Yearly</p>
    <div className="pricing__plans">
    {
      plans.map((plan, i) => <Plan data={plan} isYearly={isYearly} key={`plan-${i}`}/>)
    }
    </div>
  </section>
}
