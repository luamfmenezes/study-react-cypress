import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import { Todos } from "../pages/todos-decoupled";
import { Order } from "../pages/order/order";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/test" component={Order} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
