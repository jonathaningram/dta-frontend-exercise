import React, { Component } from "react";
import styled from "styled-components";
import { media } from "./style-utils";

const color = "#666";

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: .5rem 1rem;
  background: white;
  color: ${color};
  font-size: 1rem;
  border: 1px solid ${color};
  border-radius: .25rem;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  transition: all .2s ease-in-out;
  user-select: none;
  ${media.small`
    display: inline-block;
    width: auto;
  `}
`;

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { delta } = this.props;
    this.props.onClick(delta);
  }

  render() {
    const { className, delta } = this.props;
    const prefix = delta < 0 ? "" : "+";
    return (
      <StyledButton
        className={className}
        type="button"
        onClick={this.handleClick}
      >
        {`${prefix}${delta}`}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  delta: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Button;
