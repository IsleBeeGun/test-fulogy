import React from "react";
import "./Basket.scss";

export class Basket extends React.Component {
  render() {
    return (
      <div className="basket-container">
        <div className="basket-element">
          <span>Вариант кухни:</span>
          <span>{this.props.superstate.variant}</span>
        </div>
        <div className="basket-element">
          <span>Размер кухни:</span>
          <span>{this.props.superstate.sizes}</span>
        </div>
        <div className="basket-element">
          <span>Наличие сенсора:</span>
          <span>{this.props.superstate.sensor}</span>
        </div>
        <div className="basket-element">
          <span>Длина кабеля:</span>
          <span>{this.props.superstate.cable}</span>
        </div>
        <div className="basket-element">
          <span>Блок питания:</span>
          <span>{this.props.superstate.power}</span>
        </div>
        <div className="basket-element">
          <span>Цвет свечения:</span>
          <span>{this.props.superstate.color}</span>
        </div>
        <div className="basket-element">
          <span>Монтаж:</span>
          <span>{this.props.superstate.mount}</span>
        </div>
      </div>
    );
  }
}
