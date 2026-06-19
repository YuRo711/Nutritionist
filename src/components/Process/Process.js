import TitleCard from "../TitleCard/TitleCard";
import "./Process.scss";
import ProcessStep from "./ProcessStep/ProcessStep";
import Call from "../Call/Call";

export default function Process(props) {
  return <main className="process">
    <section className="section" id="title-card">
      <TitleCard title="Your Journey to Health and Wellness"
        text={`At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:`}    
      />
    </section>
    <section className="section" id="process">
      <h2 className="section__title">How It Works</h2>
      <p className="section__subtitle">
        We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works
      </p>
      <div className="process__steps">
      {
        props.process.map((step, i) => <ProcessStep data={step} number={i + 1} key={`step-${i}`}/>)
      }
      </div>
    </section>
    <Call title="Are you ready to embark on a transformative journey towards better health and wellness?"
      text="Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
      button="Join Us Now"
    />
  </main>
}