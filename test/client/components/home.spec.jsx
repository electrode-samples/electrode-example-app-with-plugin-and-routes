require("isomorphic-fetch");

import React from "react";
import ReactDOM from "react-dom";
import { Home } from "client/components/home";

class ChildComponent extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

describe("Home", () => {
  let component;
  let container;
  let location;

  beforeEach(() => {
    container = document.createElement("div");
    location = { pathname: "/" };
  });

  it("has expected content with deep render", () => {
    component = ReactDOM.render(
      <Home location={location}>
        <ChildComponent />
      </Home>,
      container);
    expect(component).to.not.be.false;
  });
});
