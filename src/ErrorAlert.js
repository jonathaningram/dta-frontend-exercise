import React, { Component } from "react";

class ErrorAlert extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        {message}
      </div>
    );
  }
}

ErrorAlert.propTypes = { message: React.PropTypes.string.isRequired };

export default ErrorAlert;
