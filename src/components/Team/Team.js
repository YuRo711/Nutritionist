import "./Team.scss";
import { useState } from "react";
import TitleCard from "../TitleCard/TitleCard";
import Call from "../Call/Call";

export default function Team(props) {
  const [category, setCategory] = useState("Management Team");

  return <main className="team">
    <section className="section" id="team">
      <TitleCard title="Meet Our Team of Experts"
        text="Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health."
      />
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
      <div className="team__people">
      {
        props.team.find((person) => person.category == category) != null ?
        props.team.filter((person) => person.category == category)
          .map((person, i) => <div className="person" key={`person-${i}`}>
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
    <Call title="Join Our Team" button="Apply now"
      text="We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals."
    />
  </main>
}