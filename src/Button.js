import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { delta } = this.props;
    this.props.onClick(delta);
  }

  render() {
    const { delta } = this.props;
    const prefix = delta < 0 ? "" : "+";
    return (
      <button type="button" onClick={this.onClick}>
        {`${prefix}${delta}`}
      </button>
    );
  }
}

Button.propTypes = {
  delta: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Button;
