import React, { Component } from "react";
import styled from "styled-components";

const height = "2.5rem";

const Wrapper = styled.div`
  background: #fafafa;
  height: ${height};
  position: relative;
`;

const Progress = styled.div`
  background: ${props => props.full ? "#d9534f" : "#eaeaea"};
  height: ${height};
  transition: width 0.5s, background-color 0.5s;
`;

const Text = styled.div`
  color: ${props => props.full ? "#fff" : "#313131"};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: ${height};
`;

class Bar extends Component {
  percentage() {
    const { value, limit } = this.props;
    if (limit <= 0 || value <= 0) {
      return 0;
    }
    return (value / limit * 100).toFixed(0);
  }

  render() {
    const p = this.percentage();
    const full = p >= 100;

    return (
      <Wrapper>
        <Progress full={full} style={{ width: full ? "100%" : `${p}%` }}>
          <Text full={full}>{`${p}%`}</Text>
        </Progress>
      </Wrapper>
    );
  }
}

Bar.propTypes = {
  value: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired
};

export default Bar;
