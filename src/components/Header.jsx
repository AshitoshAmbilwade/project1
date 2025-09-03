import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 1.5em;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ff9800;
    }
  }
`;

const Header = ({ title }) => {
  return (
    <Nav>
      <h1>{title}</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </Nav>
  );
};

export default Header;
