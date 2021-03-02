import React from "react";
import ReactDOM from "react-dom";

const fName = "Natsu";
const lName = "Dragneel";
const luckyNumber = 16;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
