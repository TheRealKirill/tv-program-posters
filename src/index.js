import React from "react";
import ReactDOM from "react-dom";
import store from "./store-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Poster from "./components/Poster";

const rerender = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" render={() => <Poster />} />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store);
