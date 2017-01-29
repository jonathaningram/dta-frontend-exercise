import React, { Component } from "react";
import styled from "styled-components";
import { media } from "./style-utils";
import Dropdown from "./Dropdown";
import Button from "./Button";

const StyledDropdown = styled(Dropdown)`
  margin-bottom: 1rem;
  ${media.large`
    display: inline-block;
    width: auto;
    margin-bottom: 0;
    margin-right: 0.5rem;
  `}
`;

const StyledButton = styled(Button)`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: ${props => props.odd ? "1%" : 0};
  margin-left: ${props => !props.odd ? "1%" : 0};
  width: 49%;
  ${media.small`
    display: inline-block;
  `}
  ${media.large`
    width: auto;
    margin-right: 0.5rem;
    margin-bottom: 0;
    margin-left: 0;
  `}
`;

// Controls groups and lays out the dropdown and button controls.
class Controls extends Component {
  render() {
    const {
      activeBar,
      bars,
      buttons,
      onActiveBarChange,
      onDeltaChange
    } = this.props;

    return (
      <div>
        <StyledDropdown
          value={activeBar}
          bars={bars}
          onChange={onActiveBarChange}
        />
        {buttons.map((b, i) => {
          return (
            <StyledButton
              key={i}
              odd={i % 2 === 0}
              delta={b}
              onClick={onDeltaChange}
            />
          );
        })}
      </div>
    );
  }
}

Controls.propTypes = {
  activeBar: React.PropTypes.number.isRequired,
  bars: React.PropTypes.array.isRequired,
  buttons: React.PropTypes.array.isRequired,
  onActiveBarChange: React.PropTypes.func.isRequired,
  onDeltaChange: React.PropTypes.func.isRequired
};

export default Controls;
