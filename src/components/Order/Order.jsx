import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import OrderInput from "./OrderInput";
import OrderList from "./OrderList";
import { DB_CONFIG } from "../Config/config";
import firebase from "firebase/app";

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);

    this.state = {
      orders: [],
      id: 1 + Math.random(),
      model: "",
      brand: "",
      info: "",
      showInfo: false
    };
  }

  

  handleChangeModel = e => {
    this.setState({
      model: e.target.value
    });
  };

  handleChangeBrand = e => {
    this.setState({
      brand: e.target.value
    });
  };

  handleChangeInfo = e => {
    this.setState({
      info: e.target.value
    });
  };

  handleShow = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.model && this.state.brand) {
      const newOrder = {
        id: this.state.id,
        model: this.state.model,
        brand: this.state.brand,
        info: this.state.info
      };

      const updatedOrders = [...this.state.orders, newOrder];

      this.setState({
        orders: updatedOrders,
        id: 1 + Math.random(),
        model: "",
        brand: "",
        info: ""
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container text-center">
            <Title name="Order" title="Laptop" />
            <div className="row">
              <OrderInput
                model={this.state.model}
                brand={this.state.brand}
                info={this.state.info}
                handleChangeModel={this.handleChangeModel}
                handleChangeBrand={this.handleChangeBrand}
                handleChangeInfo={this.handleChangeInfo}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <h6 className="show-latest">
              Watch our Latest Orders{" "}
              <span onClick={this.handleShow}>
                <i className="fas fa-caret-square-down"></i>
              </span>
            </h6>
            {this.state.showInfo && <OrderList orders={this.state.orders} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
