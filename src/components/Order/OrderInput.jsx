import React, { Component } from "react";

export default class OrderInput extends Component {
  render() {
    return (
      <div className=" col-10 mx-auto col-md-8 mt-4 text-center">
        <form onSubmit={this.props.handleSubmit} action="">
          <input
            className="inp form-control text-capitalize my-3"
            type="text"
            placeholder="Model"
            onChange={this.props.handleChangeModel}
            value={this.props.model}
          />

          <input
            className="inp form-control text-capitalize mb-4"
            type="text"
            placeholder="Brand"
            onChange={this.props.handleChangeBrand}
            value={this.props.brand}
          />

          <textarea
            className="form-control my-3"
            id=""
            cols="30"
            rows="4"
            placeholder="Any specifics you might want to mention"
            onChange={this.props.handleChangeInfo}
            value={this.props.info}
          ></textarea>

          <button
            className="btn btn btn-warning text-uppercase mt-3 px-5"
            type="submit"
          >
            Order
          </button>
        </form>
      </div>
    );
  }
}
