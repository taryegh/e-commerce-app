import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Order from "./components/Order";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/order" component={Order} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
          <Footer />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
