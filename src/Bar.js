import React, { Component } from "react";

class Bar extends Component {
  render() {
    const { value, limit } = this.props;
    let percentage;
    if (limit > 0) {
      percentage = (value / limit * 100).toFixed(0);
    } else {
      percentage = 0;
    }

    return (
      <div>
        {`${percentage}%`}
      </div>
    );
  }
}

Bar.propTypes = {
  value: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired
};

export default Bar;
