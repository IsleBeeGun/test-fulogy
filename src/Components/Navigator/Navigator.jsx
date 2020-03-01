import React from "react";
import "./Navigator.scss";

export class Navigator extends React.Component {
  render() {
    return (
      <nav className="navigator-container">
        {this.props.options.map((option, index) => {
          if (option.value === this.props.option) {
            return (
              <button
                className="option-button highlighted"
                value={option.value}
                key={index + option.name}
                onClick={event => {
                  this.props.changeOption(event.target.value);
                }}
              >
                {option.name}
              </button>
            );
          } else {
            if (option.value === "mount" || option.value === "basket") {
              return (
                <button
                  className="option-button alternative"
                  value={option.value}
                  key={index + option.name}
                  onClick={event => {
                    this.props.changeOption(event.target.value);
                  }}
                >
                  {option.name}
                </button>
              );
            } else {
              return (
                <button
                  className="option-button"
                  value={option.value}
                  key={index + option.name}
                  onClick={event => {
                    this.props.changeOption(event.target.value);
                  }}
                >
                  {option.name}
                </button>
              );
            }
          }
        })}
      </nav>
    );
  }
}
