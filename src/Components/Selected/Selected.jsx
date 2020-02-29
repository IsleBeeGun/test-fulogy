import React from "react";
import "./Selected.scss";
import { Cable } from "./Cable/Cable";
import { Color } from "./Color/Color";
import { Mount } from "./Mount/Mount";
import { Power } from "./Power/Power";
import { Sensor } from "./Sensor/Sensor";
import { Sizes } from "./Sizes/Sizes";
import { Variant } from "./Variant/Variant";
import { Basket } from "./Basket/Basket";
import { Suggestion } from "./Suggestion/Suggestion";

export class Selected extends React.Component {
  components = {
    variant: Variant,
    sizes: Sizes,
    sensor: Sensor,
    cable: Cable,
    power: Power,
    color: Color,
    mount: Mount,
    basket: Basket
  }
  render() {
    const ComponentName = this.components[this.props.option];
    return (
      <div className="selected-container">
        <Suggestion
          option={this.props.options.find(option => {
            return option.value === this.props.option;
          })}
        />
        <ComponentName />
      </div>
    );
  }
}
