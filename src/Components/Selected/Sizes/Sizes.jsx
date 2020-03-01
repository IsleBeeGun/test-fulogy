import React from "react";
import "./Sizes.scss";

export class Sizes extends React.Component {
  render() {
    return (
      <form className="sizes-container">
        {Object.entries(this.props.option.type).map((type, index) => {
          return (
            <div key={index + "-" + type[0]} className="sizes-element">
              <div
                className="sizes-control"
                onClick={() => {
                  document.getElementById(index + "-" + type[0]).click();
                }}
              >
                <input
                  checked={
                    this.props.superstate.sizes === type[0] ? true : false
                  }
                  type="radio"
                  id={index + "-" + type[0]}
                  name={this.props.option.value}
                  value={type[0]}
                  onChange={event => {
                    this.props.changeSetting(
                      event.target.value,
                      this.props.option.value
                    );
                  }}
                />
                <label htmlFor={index + "-" + type[0]}>{type[1].name}</label>
              </div>
            </div>
          );
        })}
      </form>
    );
  }
}
