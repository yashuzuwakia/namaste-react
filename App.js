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

const Title = () => {
  return <h1>I am the title of this app.</h1>;
};

function NormalFunction() {
  return <h1>I am normal Function</h1>;
}
//React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <NormalFunction />
      {jsxHeading}
      <h1 className="heading">Namaste React Functional Component!! 🚀</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
