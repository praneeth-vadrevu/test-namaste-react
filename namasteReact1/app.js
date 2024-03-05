{
  /* <div id="parent">
    <div id="child">
        <h1>I am an H1 tag.</h1>
        <h2>I am an H2 tag.</h2>
    </div>
</div> */
}

const root = ReactDOM.createRoot(document.querySelector(".root"));

const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag."),
    React.createElement("h2", {}, "I am an H2 tag."),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag."),
    React.createElement("h2", {}, "I am an H2 tag."),
  ]),
]);
console.log(heading);

root.render(heading);
