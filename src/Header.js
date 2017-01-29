import React, { Component } from "react";
import styled from "styled-components";
import { media } from "./style-utils";
import logo from "./logo.svg";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 0.5rem;
  color: #313131;
`;

const Logo = styled.img`
  height: 60px;
  ${media.small`
    height: 80px;
  `}
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  ${media.small`
    font-size: 1.5rem;
  `}
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo
          src={logo}
          alt="Australian Government - Digital Transformation Agency"
        />
        <Heading>{`“Digitally Transformed Bars”`}</Heading>
      </Wrapper>
    );
  }
}

export default Header;
