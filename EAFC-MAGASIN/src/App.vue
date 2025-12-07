<template>
  <div class="bg-gray-100 min-h-screen font-sans flex flex-col">
    <TheHeader />

    <main class="container mx-auto py-8 px-4 flex flex-wrap">
      
      <ProductList />
      
      <ShoppingCart />

    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue' 
</script>