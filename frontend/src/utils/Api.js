class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  searchProducts(query) {
    return fetch(`${this._url}search/?search=${query}`, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  createProduct(newProduct) {
    return fetch(`${this._url}create`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: newProduct.name,
        description: newProduct.description,
        parameters: {
          price: newProduct.price,
          equipment: newProduct.equipment,
        },
      }),
    }).then(this._getResponseData);
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
const api = new Api({
  url: "http://localhost:3001/",
  headers: {
    "content-type": "application/json",
  },
});

export default api;
