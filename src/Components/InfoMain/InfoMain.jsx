import React from "react";
import "./InfoMain.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export class InfoMain extends React.Component {
  render() {
    return (
      <section className="infomain-container">
        <div>
          <button className="infomain-back" onClick={this.props.toggleInfo}>
            <i class="fas fa-chevron-left"></i>
            <span>Вернуться</span>
          </button>
        </div>
        <div>
          <p className="infomain-text">{this.props.info}</p>
        </div>
      </section>
    );
  }
}
