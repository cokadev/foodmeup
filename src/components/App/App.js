import React, { PureComponent } from "react";
import Layout from "../Layout";
import { Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return <Route path="/" component={Layout} />;
  }
}

export default App;
