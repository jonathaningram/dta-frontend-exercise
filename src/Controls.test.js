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
      bars={[ 5, 10 ]}
      buttons={[ -1, 1 ]}
      onActiveBarChange={noop}
      onDeltaChange={noop}
    />,
    div
  );
});
