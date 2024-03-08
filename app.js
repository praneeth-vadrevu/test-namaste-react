import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = (
  <h1 className="heading" id="heading">
  
    This is H1 via JSX
  </h1>
);

// functional component
const HeadingComponent = () => {
  return <h1 className="heading">This is a functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


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