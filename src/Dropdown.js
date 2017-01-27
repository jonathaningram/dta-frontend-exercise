import React, { Component } from "react";
import styled from "styled-components";
import { media } from "./style-utils";

const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  line-height: 1.25;
  color: #464a4c;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
  background-size: 8px 10px;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  font-size: 100%;
  ${media.small`
    display: inline-block;
    width: auto;
  `}
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(+e.target.value);
  }

  render() {
    const { className, bars, value } = this.props;
    return (
      <Select className={className} value={value} onChange={this.handleChange}>
        {bars.map((_, i) => {
          return <option key={i} value={i}>{`#progress${i + 1}`}</option>;
        })}
      </Select>
    );
  }
}

Dropdown.propTypes = {
  bars: React.PropTypes.array.isRequired,
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Dropdown;
