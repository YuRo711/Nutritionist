import Feature from "./Feature/Feature";
import "./Features.scss";

export default function Features(props) {
  const { features } = props;

  return <section className="section">
    <h2 className="section__title">Features</h2>
    <p className="section__subtitle">
      Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
    </p>
    <div className="features__grid">
    {
      features.map((feature, i) => <Feature data={feature} key={`feature-${i}`}/>)
    }
    </div>
  </section>
}