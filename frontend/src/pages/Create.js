import React, { useState } from "react";
import api from "../utils/Api.js";

export const Create = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [equipment, setEquipment] = useState("");

  function clearInput() {
    setName("");
    setDescription("");
    setPrice("");
    setEquipment("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api.createProduct({
      name,
      description,
      price,
      equipment,
    });
    clearInput();
  };

  return (
    <div className="container">
      <h2 className="container__title">Создание товара</h2>
      <form className="container__form" onSubmit={handleSubmit}>
        <div className="container__string">
          <label className="container__value">Наименование:</label>
          <input
            className="container__input"
            placeholder="Введите наименование..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container__string">
          <label className="container__value">Описание:</label>
          <input
            className="container__input"
            id="input-description"
            placeholder="Введите описание..."
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="container__string">
          <label className="container__value">Стоимость:</label>
          <input
            className="container__input"
            id="input-price"
            placeholder="Введите стоимость..."
            name="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="container__string">
          <label className="container__value">Комплектация:</label>
          <input
            className="container__input"
            id="input-equipment"
            placeholder="Введите комплектацию..."
            name="equipment"
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <button className="container__button" type="submit">
          Создать
        </button>
      </form>
    </div>
  );
};
export default Create;
