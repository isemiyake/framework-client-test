<template>
  <section class="w-full md:w-2/3 px-4 mb-8">
    <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <div v-if="productStore.products.length === 0" class="col-span-full text-center py-10 text-gray-500">
        <i class="fas fa-spinner fa-spin mr-2"></i> Chargement des produits...
      </div>

      <article 
        v-for="product in productStore.products" 
        :key="product.id"
        class="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
        
        <div class="p-4">
          <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
          <p class="text-gray-700">€{{ product.price }}</p>
          
          <button 
            @click="cartStore.addToCart(product)"
            class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:transform active:scale-95"
          >
            Ajouter
          </button>
        </div>
      </article>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/products.js';
import { useShoppingcartStore } from '@/stores/shoppingcart.js';

const productStore = useProductStore();
const cartStore = useShoppingcartStore();

onMounted(() => {
  productStore.loadProducts();
});
</script>