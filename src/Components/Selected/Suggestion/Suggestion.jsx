import React from "react";
import "./Suggestion.scss";
import {Info} from "../Info/Info";

export class Suggestion extends React.Component {
  render() {
    return <div className="suggestion-container">
      <Info />
      <div>Do something</div>
    </div>
  }
}
