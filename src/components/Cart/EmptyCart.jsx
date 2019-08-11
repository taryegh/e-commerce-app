import React from "react";

export default function EmptyCart() {
  return (
    <div className="row">
      <div className="col-10 my-2 mx-auto text-center text-title">
        <h1>cart is empty</h1>
        <i className="icon ion-ios-cart cart-big" />
      </div>
    </div>
  );
}
