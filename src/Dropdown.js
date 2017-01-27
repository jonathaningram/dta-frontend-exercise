import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(+e.target.value);
  }

  render() {
    const { bars, value } = this.props;
    return (
      <select value={value} onChange={this.handleChange}>
        {bars.map((_, i) => {
          return <option key={i} value={i}>{`#progress${i + 1}`}</option>;
        })}
      </select>
    );
  }
}

Dropdown.propTypes = {
  bars: React.PropTypes.array.isRequired,
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Dropdown;
