// src/services/DB.js

const API_URL = "https://6934a3e24090fe3bf0206c21.mockapi.io/"; 

export default class DB {
  
  static async findAll() {
    // On appelle la ressource "products"
    const response = await fetch(API_URL + "products");

    // On retourne les données en JSON
    return response.json();
  }

}