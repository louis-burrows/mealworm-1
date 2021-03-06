import React, { Component } from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";

class Routes extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <Router>
        <Dashboard path="/" recipes={recipes} />
        <Cookbook path="cookbook" />
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
