import React from "react";
import "./Selected.scss";
import { Cable } from "./Cable/Cable";
import { Color } from "./Color/Color";
import { Mount } from "./Mount/Mount";
import { Power } from "./Power/Power";
import { Sensor } from "./Sensor/Sensor";
import { Sizes } from "./Sizes/Sizes";
import { Variant } from "./Variant/Variant";
import { Suggestion } from "./Suggestion/Suggestion";

export class Selected extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    switch (this.props.option) {
      case "variant":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Variant />
          </div>
        );
      case "sizes":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Sizes />
          </div>
        );
      case "sensor":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Sensor />
          </div>
        );
      case "cable":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Cable />
          </div>
        );
      case "power":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Power />
          </div>
        );
      case "color":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Color />
          </div>
        );
      case "mount":
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Mount />
          </div>
        );
      default:
        return (
          <div className="selected-container">
            <Suggestion option={this.props.options.find(option=>{
              return option.value === this.props.option;
            })} />
            <Color />
          </div>
        );
    }
  }
}
