import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__content">
          <h2 className="about__title">About Us</h2>
          <p className="about__description">
            Fahim is dedicated to helping KU Engineering students excel. We
            provide personalized course recommendations, professor ratings, GPA
            calculations, and tutor suggestions to ensure your academic success.
          </p>
        </div>
        <div className="about__image">
          {/* You can add an image here if you like */}
        </div>
      </div>
    </section>
  );
};

export default About;
