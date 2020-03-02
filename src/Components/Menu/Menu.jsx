import React from "react";
import "./Menu.scss";

export class Menu extends React.Component {
  render() {
    return (
      <nav className="menu-container">
        <ul className="menu-list">
          <li className="menu-element">
            <span className="menu-text">Обучающее видео</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Оформление заказа</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Оплата</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Доставка</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Гарантия</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Возврат</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Контакты</span>
          </li>
          <li className="menu-element">
            <span className="menu-text">Партнёрам</span>
          </li>
        </ul>
      </nav>
    );
  }
}
