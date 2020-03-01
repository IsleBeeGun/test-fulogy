import React from "react";
import "./InfoMain.scss";

export class InfoMain extends React.Component {
  render() {
    return (
      <section className="infomain-container">
        <div>
          <button className="infomain-back" onClick={this.props.toggleInfo}>&lt;&nbsp;Вернуться</button>
        </div>
        <div>
          <p className="infomain-text">{this.props.info}</p>
        </div>
      </section>
    );
  }
}
