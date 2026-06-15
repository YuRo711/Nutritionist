import "./Team.scss";
import logo from "../../images/team logo.svg";
import bg from "../../images/team bg.png";
import scribble from "../../images/about scribble.svg";
import logobg from "../../images/about logo.svg";
import { useState } from "react";

export default function Team(props) {
  const [category, setCategory] = useState("Management Team");

  return <main className="team">
    <section className="section" id="team">
      <div className="team__header">
        <img className="team__bg" src={bg} alt="abstract background"/>
        <div className="team__info">
          <img className="team__logo" src={logo} alt="Nutritionist logo"/>
          <h2 className="section__title section__title_semibold">Meet Our Team of Experts</h2>
          <p className="team__text">
            Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.
          </p>
        </div>
        <div className="team__categories">
          <button className={`team__category ${category=="Management Team" ? "team__category_selected" : ""}`} 
            onClick={() => setCategory("Management Team")}>
            Management Team
          </button>
          <button className={`team__category ${category=="Nutritionists and Dietitians" ? "team__category_selected" : ""}`} 
            onClick={() => setCategory("Nutritionists and Dietitians")}>
            Nutritionists and Dietitians
          </button>
          <button className={`team__category ${category=="Customer Support" ? "team__category_selected" : ""}`}
            onClick={() => setCategory("Customer Support")}>
            Customer Support
          </button>
          <button className={`team__category ${category=="Marketing and Communications" ? "team__category_selected" : ""}`}
            onClick={() => setCategory("Marketing and Communications")}>
            Marketing and Communications
          </button>
          <button className={`team__category ${category=="echnology and Development" ? "team__category_selected" : ""}`}
            onClick={() => setCategory("Technology and Development")}>
            Technology and Development
          </button>
        </div>
      </div>
      <div className="team__people">
      {
        props.team.find((person) => person.category == category) != null ?
        props.team.filter((person) => person.category == category)
          .map((person, i) => <div className="person">
            <img className="person__portrait" src={person.image} alt={person.name}/>
            <div className="person__info">
              <h2 className="person__name">{person.name}</h2>
              <p className="person__position">{person.position}</p>
            </div>
          </div>) :
        <p className="team__none">No people in this category yet!</p>
      }
      </div>
    </section>
    <section className="section" id="join">
      <div className="join">
      <div className="join__main">
        <h2 className="join__title">Join Our Team</h2>
        <p className="join__text">
          We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.
        </p>
      </div>
      <button className="join__button">Apply now</button>
      <img className="join__scribble" src={scribble} alt="scribble"/>
      <img className="join__logo" src={logobg} alt="Nutritionist logo"/>
    </div>
    </section>
  </main>
}