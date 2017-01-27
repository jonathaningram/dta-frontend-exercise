import React, { Component } from "react";

class Bar extends Component {
  percentage() {
    const { value, limit } = this.props;
    if (limit <= 0 || value <= 0) {
      return 0;
    }
    return (value / limit * 100).toFixed(0);
  }

  render() {
    return (
      <div>
        {`${this.percentage()}%`}
      </div>
    );
  }
}

Bar.propTypes = {
  value: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired
};

export default Bar;
