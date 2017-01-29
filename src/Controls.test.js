import React from "react";
import ReactDOM from "react-dom";
import Controls from "./Controls";

function noop() {
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Controls
      activeBar={0}
      bars={[]}
      buttons={[]}
      onActiveBarChange={noop}
      onDeltaChange={noop}
    />,
    div
  );
});
