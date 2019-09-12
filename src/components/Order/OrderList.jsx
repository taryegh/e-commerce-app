import React, { Component } from "react";
import OrderItem from "./OrderItem";

export default class OrderList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        {this.props.orders.map(order => {
          return (
            <OrderItem
              key={order.id}
              model={order.model}
              brand={order.brand}
              info={order.info}
            />
          );
        })}

        <OrderItem />
      </ul>
    );
  }
}
