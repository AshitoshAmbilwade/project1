import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  background-image: url("https://picsum.photos/2000/1000");
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
  }
`;

const Home = ({ heading, subtitle }) => {
  return (
    <Hero>
      <h1>{heading}</h1>
      <p>{subtitle}</p>
    </Hero>
  );
};

export default Home;
