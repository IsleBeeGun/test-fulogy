import React from "react";
import "./Info.scss";

export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changeSetting(this.props.info, "info");
    this.props.toggleInfo();
  }
  render() {
    return (
      <div className="info-container">
        <div className="info-button-container">
          <button className="info-button" onClick={this.handleClick}>
            <i className="fas fa-info"></i>
          </button>
        </div>
      </div>
    );
  }
}
