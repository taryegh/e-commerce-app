import React, { Component } from "react";

export default class OrderItem extends Component {
  render() {
    return (
      <li className="text-capitalize d-flex justify-content-between my-2">
        <h6>{this.props.model}</h6>
        <h6>{this.props.brand}</h6>
        <h6>{this.props.info}</h6>
      </li>
    );
  }
}
