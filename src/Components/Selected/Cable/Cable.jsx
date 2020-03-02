import React from "react";
import "./Cable.scss";

export class Cable extends React.Component {
  render() {
    return (
      <form className="cable-container">
        {Object.entries(this.props.option.type).map((type, index) => {
          return (
            <div key={index + "-" + type[0]} className="cable-element">
              <div
                className="cable-control"
                onClick={() => {
                  document.getElementById(index + "-" + type[0]).click();
                }}
              >
                <div>
                  <label htmlFor={index + "-" + type[0]}>{type[1].name}</label>
                  <span>{this.props.superstate.cable + " см."}</span>
                </div>
                <input
                  defaultValue={this.props.superstate.cable}
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  id={index + "-" + type[0]}
                  name={this.props.option.value}
                  onChange={event => {
                    this.props.changeSetting(
                      event.target.value,
                      this.props.option.value
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </form>
    );
  }
}
