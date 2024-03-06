import React from "react";
import ReactDOM  from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector(".root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag."),
    React.createElement("h2", {}, "I am an H2 tag."),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag."),
    React.createElement("h2", {}, "I am an H2 tag."),
  ]),
]);
console.log(parent);

root.render(parent);