import React from "react";
import ReactDOM from "react-dom/client";

//Code written by using pure React
const heading = React.createElement("h1", { id: "heading" }, "I am React App");

// JSX is HTML like or XML Like syntax
// written by useing JSX
//JSX is tranpiled before it reaches to JS by - Parcel - It is actully done by Babel
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    This is React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
