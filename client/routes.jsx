import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { HouseParty } from "electrode-houseparty-example-component";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={HouseParty}/>
    <Route path="/invite" component={HouseParty}/>
  </Route>
);
