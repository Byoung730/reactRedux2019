import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Tony" time="6:00PM" text="Hello" date="4/6/19" />
      <CommentDetail
        name="Chris"
        time="7:00PM"
        text="How are you"
        date="4/8/19"
      />
      <CommentDetail name="Pat" time="8:00PM" text="Goodbye" date="4/10/19" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
