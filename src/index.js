import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Tony" time="6:00PM" text="Hello" />
      <CommentDetail name="Chris" time="7:00PM" text="How are you" />
      <CommentDetail name="Pat" time="8:00PM" text="Goodbye" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
