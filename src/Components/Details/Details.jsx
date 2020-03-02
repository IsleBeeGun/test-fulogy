import React from "react";
import "./Details.scss";

export class Details extends React.Component {
  render() {
    return (
      <div className="details-container">
        <div className="details-element">
          <span className="details-name">Класс:</span>
          <span className="details-description nopadding">
            <strong className="tag">Standart</strong>
          </span>
        </div>
        <div className="details-element">
          <span className="details-name">Потребляемая мощьность:</span>
          <span className="details-description">59 Вт.</span>
        </div>
        <div className="details-element">
          <span className="details-name">Сила света:</span>
          <span className="details-description">
            3495 Люмен = 7,5 ламп накаливания по 40 Вт.
          </span>
        </div>
        <div className="details-element">
          <span className="details-name">Гарантия:</span>
          <span className="details-description">3 года</span>
        </div>
        <div className="details-element">
          <span className="details-name">Монтаж:</span>
          <span className="details-description">{this.props.mount==="yes"?"Да":"Нет"}</span>
        </div>
        <div className="details-element">
          <span className="details-name">Итого сумма:</span>
          <span className="details-description">2594 рублей</span>
        </div>
        <div></div>
      </div>
    );
  }
}
