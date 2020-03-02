import React from "react";
import "./Color.scss";

export class Color extends React.Component {
  render() {
    return (
      <form className="color-container">
        {this.props.option.type[this.props.superstate.variant].map(
          (color, index) => {
            if (color.value === this.props.superstate.color) {
              return (
                <div
                  key={index + "-" + color.name}
                  className="color-element selected"
                >
                  <i className="fas fa-check-square checkmark"></i>
                  <img
                    src={color.img}
                    alt=""
                    value={color.value}
                    className="selected"
                    onClick={() => {
                      this.props.changeSetting(
                        color.value,
                        this.props.option.value
                      );
                    }}
                  />
                  <span className="selected">{color.name}</span>
                </div>
              );
            } else {
              return (
                <div key={index + "-" + color.name} className="color-element">
                  <img
                    src={color.img}
                    alt=""
                    id={index + "-" + color.name} 
                    value={color.value}
                    onClick={() => {
                      this.props.changeSetting(
                        color.value,
                        this.props.option.value
                      );
                    }}
                  />
                  <span
                    onClick={() => {
                      document.getElementById(index + "-" + color.name).click();
                    }}
                  >
                    {color.name}
                  </span>
                </div>
              );
            }
          }
        )}
      </form>
    );
  }
}
