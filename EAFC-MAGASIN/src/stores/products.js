// src/stores/products.js
import { defineStore } from 'pinia'
import DB from '../services/DB.js' 

export const useProductStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  actions: {
    async loadProducts() {
      this.products = await DB.findAll()
    }
  }
})