import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
