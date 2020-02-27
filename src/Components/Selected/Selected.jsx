import React from "react";
import "./Selected.scss";
import {Cable} from "./Cable/Cable";
import {Color} from "./Color/Color";
import {Mount} from "./Mount/Mount";
import {Power} from "./Power/Power";
import {Sensor} from "./Sensor/Sensor";
import {Sizes} from "./Sizes/Sizes";
import {Variant} from "./Variant/Variant";
import {Suggestion} from "./Suggestion/Suggestion";

export class Selected extends React.Component {
  render() {
    return <div className="selected-container">
      <Suggestion />
      <Color />
    </div>;
  }
}
