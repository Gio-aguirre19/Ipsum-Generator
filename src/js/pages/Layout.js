import React from "react";

import Header from "../components/Header";
import Home from "./Home";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
  )}
}
