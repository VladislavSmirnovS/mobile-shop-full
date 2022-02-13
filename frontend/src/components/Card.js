import React from "react";

function Card(props) {
  return (
    <div className="cards__item">
      <div className="cards__string">
        <label className="cards__value">Наименование:</label>
        <p className="cards__text">{props.product.name}</p>
      </div>
      <div className="cards__string">
        <label className="cards__value">Описание:</label>
        <p className="cards__text">{props.product.description}</p>
      </div>
      <div className="cards__string">
        <label className="cards__value">Стоимость:</label>
        <p className="cards__text">{props.product.parameters.price}</p>
      </div>
      <div className="cards__string">
        <label className="cards__value">Комплектация:</label>
        <p className="cards__text">{props.product.parameters.equipment}</p>
      </div>
    </div>
  );
}

export default Card;
