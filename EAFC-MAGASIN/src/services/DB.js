// src/services/DB.js

const API_URL = "https://6934a3e24090fe3bf0206c21.mockapi.io/";

export default class DB {
  static async findAll() {
    const response = await fetch(API_URL + "products");

    return response.json();
  }
}
