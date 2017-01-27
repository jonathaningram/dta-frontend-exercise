import React from "react";
import ReactDOM from "react-dom";
import { mount, render } from "enzyme";
import Dropdown from "./Dropdown";

function noop() {
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Dropdown value={0} bars={[ 1, 2, 3 ]} onChange={noop} />,
    div
  );
});

it("renders the correct options", () => {
  const tests = [
    { value: 0, bars: [ 53 ], label: "#progress1" },
    { value: 0, bars: [ 53, 63, 73 ], label: "#progress1" },
    { value: 1, bars: [ 53, 63, 73 ], label: "#progress2" },
    { value: 2, bars: [ 53, 63, 73 ], label: "#progress3" }
  ];
  for (const t of tests) {
    const wrapper = render(
      <Dropdown value={t.value} bars={t.bars} onChange={noop} />
    );
    expect(wrapper.find("select [selected]").text()).toEqual(t.label);
    expect(wrapper.find("option").length).toEqual(t.bars.length);
  }
});

it("triggers the change handler", () => {
  let triggered = false;
  let value;
  function onChange(v) {
    triggered = true;
    value = v;
  }
  const wrapper = mount(
    <Dropdown value={0} bars={[ 53, 63 ]} onChange={onChange} />
  );
  expect(triggered).toEqual(false);
  // Note: the DOM will send string values, so use that in the test too.
  wrapper.find("select").simulate("change", { target: { value: "1" } });
  expect(triggered).toEqual(true);
  expect(value).toEqual(1);
});
