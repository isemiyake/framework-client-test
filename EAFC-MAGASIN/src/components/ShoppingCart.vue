<template>
  <aside class="w-full md:w-1/3 px-4">
    <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
    
    <div 
      class="cart bg-white rounded-lg shadow animate__animated" 
      :class="{ 'animate__backOutRight': isClosing }"
    >
      
      <div v-if="cartStore.items.length === 0" class="p-6 text-center text-gray-500">
        Votre panier est vide.
      </div>

      <div v-else>
        <ul class="divide-y divide-gray-200 space-y-4 p-6">
          
          <li 
            v-for="item in cartStore.items" 
            :key="item.id" 
            class="flex justify-between items-center py-3"
          >
            <div class="flex items-center">
              <img :src="item.image" :alt="item.name" class="h-12 w-12 rounded-full mr-4 object-cover" />
              <div>
                <span class="font-semibold">{{ item.name }}</span>
                <span class="block text-sm text-gray-500">€{{ item.price }}</span>
              </div>
            </div>
            
            <div class="flex items-center">
              <input 
                type="number" 
                class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border" 
                :value="item.quantity" 
                min="1"
                @change="updateQty(item.id, $event.target.value)"
              />
              
              <button 
                @click="cartStore.removeItem(item.id)"
                class="ml-2 text-red-500 hover:text-red-700"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </li>

        </ul>

        <div class="bg-gray-50">
          <div class="p-6">
            <div class="flex justify-between mb-1">
              <span><strong>Total HTVA:</strong></span>
              <span>€{{ cartStore.totalHTVA.toFixed(2) }}</span>
            </div>
            
            <div class="flex justify-between mb-1">
              <span><strong>Taxe (20%):</strong></span>
              <span>€{{ cartStore.taxAmount.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between items-center my-8">
              <span><strong>Livraison:</strong></span>
              <select 
                v-model="cartStore.shippingCost"
                class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
              >
                <option value="5">Standard - €5</option>
                <option value="15">Express - €15</option>
              </select>
            </div>

            <div class="flex justify-between font-bold mb-1 text-xl">
              <span><strong>Total Général:</strong></span>
              <span>€{{ cartStore.grandTotal.toFixed(2) }}</span>
            </div>

            <button 
              @click="triggerAnimation"
              class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Procéder au paiement
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useShoppingcartStore } from '@/stores/shoppingcart.js';

const cartStore = useShoppingcartStore();

const isClosing = ref(false);

const triggerAnimation = () => {
    isClosing.value = true;
};

const updateQty = (id, value) => {
  const qty = parseInt(value);
  cartStore.updateQuantity(id, qty);
};
</script>