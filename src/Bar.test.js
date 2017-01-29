import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Bar from "./Bar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bar value={50} limit={100} />, div);
});

it("renders the percentage", () => {
  const tests = [
    { value: 0, limit: 0, percentage: "0%" },
    { value: 10, limit: 0, percentage: "0%" },
    { value: 0, limit: 100, percentage: "0%" },
    { value: 25, limit: 100, percentage: "25%" },
    { value: 50, limit: 100, percentage: "50%" },
    { value: 100, limit: 100, percentage: "100%" },
    { value: 150, limit: 100, percentage: "150%" },
    { value: -25, limit: 100, percentage: "0%" },
    { value: 0, limit: 230, percentage: "0%" },
    { value: 25, limit: 230, percentage: "11%" },
    { value: 50, limit: 230, percentage: "22%" },
    { value: 230, limit: 230, percentage: "100%" },
    { value: 231, limit: 230, percentage: "100%" },
    { value: 235, limit: 230, percentage: "102%" }
  ];
  for (const tt of tests) {
    const wrapper = mount(<Bar value={tt.value} limit={tt.limit} />);
    expect(wrapper.text()).toEqual(tt.percentage);
  }
});
