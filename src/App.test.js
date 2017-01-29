import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("has the correct initial state", () => {
  expect(
    new App().state
  ).toEqual({ barsRequest: {}, bars: [], buttons: [], activeBar: -1 });
});

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status,
    statusText,
    headers: { "Content-type": "application/json" }
  });
};

pit("loads the data from the endpoint into the state when mounting", () => {
  const buttons = [ 10, -5 ];
  const bars = [ 10, 20, 30 ];
  const limit = 100;
  window.fetch = jest
    .fn()
    .mockImplementation(
      () =>
        Promise.resolve(
          mockResponse(200, null, JSON.stringify({ buttons, bars, limit }))
        )
    );
  const wrapper = shallow(<App />);
  return wrapper.instance().load().then(() => {
    expect(wrapper.state().buttons).toEqual(buttons);
    expect(wrapper.state().bars).toEqual(bars);
    expect(wrapper.state().limit).toEqual(limit);
    expect(wrapper.state().activeBar).toEqual(0);
  });
});

pit("sets the active bar to -1 when there are no bars in the data", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(
      () =>
        Promise.resolve(
          mockResponse(
            200,
            null,
            JSON.stringify({ buttons: [], bars: [], limit: 100 })
          )
        )
    );
  const wrapper = shallow(<App />);
  return wrapper.instance().load().then(() => {
    expect(wrapper.state().activeBar).toEqual(-1);
  });
});

pit("sets the error state when the endpoint fails to load", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockResponse(500)));
  const wrapper = shallow(<App />);
  return wrapper.instance().load().then(() => {
    expect(
      wrapper.state().barsRequest.error
    ).toEqual({ message: "Failed to fetch bars." });
  });
});

it("updates the active bar state on change", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().activeBar).toEqual(-1);
  wrapper.instance().handleActiveBarChange(2);
  expect(wrapper.state().activeBar).toEqual(2);
});

it("updates the active bar's value on delta change", () => {
  const tests = [
    // Positive delta.
    {
      activeBar: 0,
      bars: [ 5, 10, 15 ],
      limit: 100,
      delta: 10,
      expectedBars: [ 15, 10, 15 ]
    },
    // Negative delta.
    {
      activeBar: 0,
      bars: [ 5, 10, 15 ],
      limit: 100,
      delta: -5,
      expectedBars: [ 0, 10, 15 ]
    },
    // Bounded to 0.
    {
      activeBar: 0,
      bars: [ 5, 10, 15 ],
      limit: 100,
      delta: -10,
      expectedBars: [ 0, 10, 15 ]
    },
    // Can exceed limit.
    {
      activeBar: 0,
      bars: [ 95, 10, 15 ],
      limit: 100,
      delta: 10,
      expectedBars: [ 105, 10, 15 ]
    },
    // Changing a bar other than the first one.
    {
      activeBar: 2,
      bars: [ 95, 10, 15 ],
      limit: 100,
      delta: -10,
      expectedBars: [ 95, 10, 5 ]
    }
  ];
  for (const tt of tests) {
    const wrapper = shallow(<App bars={tt.bars} />);
    const { bars, limit, activeBar } = tt;
    wrapper.setState({ bars, limit, activeBar });
    wrapper.instance().handleDeltaChange(tt.delta);
    expect(wrapper.state().bars).toEqual(tt.expectedBars);
  }
});
