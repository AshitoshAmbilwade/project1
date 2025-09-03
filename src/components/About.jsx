import React from "react";
import "./About.css";

const About = ({ features }) => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>We provide amazing services to our users. Here are some features:</p>
      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;
