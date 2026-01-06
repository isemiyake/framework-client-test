const API_URL = "https://6934a3e24090fe3bf0206c21.mockapi.io/";

// Tes données de secours (Fallback)
const FALLBACK_PRODUCTS = [
  { "name": "iphone 17 pro max", "price": 1329, "id": "1", "image": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_162241081" },
  { "name": "Samsung s25 Ultra", "price": 1079, "id": "2", "image": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_149593208" },
  { "name": "Google Pixel 10 Pro", "price": 1099, "id": "3", "image": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_160276951" },
  { "name": "Xiaomi 15 Ultra", "price": 1199, "id": "4", "image": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_155104207" }
];

export default class DB {
  static async findAll() {
    try {
      const response = await fetch(API_URL + "products");
      if (!response.ok) throw new Error("Erreur serveur");
      return await response.json();
    } catch (error) {
      console.warn("MockAPI indisponible, chargement des données locales...");
      return FALLBACK_PRODUCTS; // On renvoie les produits de secours si l'API est cassée
    }
  }
}