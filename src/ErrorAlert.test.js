import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import ErrorAlert from "./ErrorAlert";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrorAlert message={"The error message."} />, div);
});

it("renders the message", () => {
  const tests = [
    { message: "The error message." },
    { message: "Another error message." }
  ];
  for (const t of tests) {
    const wrapper = mount(<ErrorAlert message={t.message} />);
    expect(wrapper.text()).toEqual(t.message);
  }
});
