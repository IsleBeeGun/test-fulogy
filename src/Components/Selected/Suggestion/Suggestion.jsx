import React from "react";
import "./Suggestion.scss";
import { Info } from "../Info/Info";

export class Suggestion extends React.Component {
  render() {
    return (
      <div className="suggestion-container">
        <Info
          changeSetting={this.props.changeSetting}
          toggleInfo={this.props.toggleInfo}
          info={this.props.option.info}
        />
        <div className="suggestion-text-container">
          <span className="suggestion-text">
            {this.props.option.suggestion}
          </span>
        </div>
      </div>
    );
  }
}
