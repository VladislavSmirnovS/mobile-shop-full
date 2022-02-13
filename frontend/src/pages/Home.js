import React, { useState, useEffect } from "react";
import api from "../utils/Api.js";
import Card from "../components/Card.js";
import Search from "../components/Search.js";

const HomePage = () => {
  const [products, setProducts] = useState();
  const [query, setQeury] = useState("");
  const [load, setload] = useState(true);

  function handleChange(newValue) {
    setQeury(newValue);
  }

  useEffect(() => {
    api
      .searchProducts(query)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setload(false);
  }, [query]);

  let renderItems;

  if (products) {
    renderItems = products.map((item) => {
      return <Card product={item} key={item["_id"]} />;
    });
  }

  return (
    <>
      <Search onChange={handleChange} />
      {load ? (
        <p className="load">Загрузка...</p>
      ) : (
        <>
          <h1 className="cards__title">Список товаров:</h1>{" "}
          <div className="cards">{renderItems}</div>{" "}
        </>
      )}
    </>
  );
};

export default HomePage;
