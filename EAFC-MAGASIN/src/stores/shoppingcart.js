// src/stores/shoppingcart.js
import { defineStore } from 'pinia'

export const useShoppingcartStore = defineStore('shoppingcart', {
  state: () => ({
    items: [], 
    shippingCost: 5 
  }),

  getters: {
    totalHTVA: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    taxAmount: (state) => {
      return state.totalHTVA * 0.20;
    },

    grandTotal: (state) => {
      return state.totalHTVA + state.taxAmount + Number(state.shippingCost);
    },
    
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    }
  },

  actions: {
    addToCart(product) {
      // On cherche si le produit existe déjà dans le panier
      const existingItem = this.items.find(item => item.id === product.id);

      if (existingItem) {
        // Cas A : Il est déjà là -> On augmente la quantité
        existingItem.quantity++;
      } else {
        // Cas B : C'est un nouveau -> On l'ajoute avec quantité 1
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    },

    updateQuantity(productId, newQuantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        if (newQuantity <= 0) {
          this.removeItem(productId); 
        } else {
          item.quantity = newQuantity;
        }
      }
    }
  }
})