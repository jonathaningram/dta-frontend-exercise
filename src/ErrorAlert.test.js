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
  for (const tt of tests) {
    const wrapper = mount(<ErrorAlert message={tt.message} />);
    expect(wrapper.text()).toEqual(tt.message);
  }
});
