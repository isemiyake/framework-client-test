import { defineStore } from "pinia";
import DB from "../services/DB.js"; // On réutilise le service DB

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async loadProducts() {
      // DB.findAll() s'occupe de tout :
      // Il essaie MockAPI, et si ça rate, il donne les iPhones/Samsung
      this.products = await DB.findAll();
    },
  },
});
