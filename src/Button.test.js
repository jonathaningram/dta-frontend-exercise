import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Button from "./Button";

function noop() {
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button delta={20} onClick={noop} />, div);
});

it("renders the label", () => {
  const tests = [
    { delta: 0, label: "+0" },
    { delta: 25, label: "+25" },
    { delta: 50, label: "+50" },
    { delta: 100, label: "+100" },
    { delta: -25, label: "-25" },
    { delta: -50, label: "-50" },
    { delta: -230, label: "-230" }
  ];
  for (const tt of tests) {
    const wrapper = mount(<Button delta={tt.delta} onClick={noop} />);
    expect(wrapper.text()).toEqual(tt.label);
  }
});

it("triggers the click handler", () => {
  let triggered = false;
  function handleClick() {
    triggered = true;
  }
  const wrapper = mount(<Button delta={-50} onClick={handleClick} />);
  expect(triggered).toEqual(false);
  wrapper.find("button").simulate("click");
  expect(triggered).toEqual(true);
});
