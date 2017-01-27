import React, { Component } from "react";
import styled from "styled-components";
import Text from "./Text";

const Wrapper = styled.div`
  padding: 1rem;
  background: papayawhip;
`;

class ErrorAlert extends Component {
  render() {
    const { message } = this.props;
    return (
      <Wrapper>
        <Text>
          {message}
        </Text>
      </Wrapper>
    );
  }
}

ErrorAlert.propTypes = { message: React.PropTypes.string.isRequired };

export default ErrorAlert;
