import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 0.5rem;
  color: #313131;
`;

const Logo = styled.img`
  height: 80px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo
          src={logo}
          alt="Australian Government - Digital Transformation Agency"
        />
        <h2>{`“Digitally Transformed Bars”`}</h2>
      </Wrapper>
    );
  }
}

export default Header;
