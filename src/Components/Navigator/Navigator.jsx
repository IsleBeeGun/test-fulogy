import React from "react";
import "./Navigator.scss";

export class Navigator extends React.Component {
  render() {
    return (
      <nav className="navigator-container">
        <button className="option-button">1</button>
        <button className="option-button">2</button>
        <button className="option-button">3</button>
        <button className="option-button">4</button>
        <button className="option-button">5</button>
        <button className="option-button">6</button>
        <button className="option-button">7</button>
        <button className="option-button">8</button>
      </nav>
    );
  }
}
