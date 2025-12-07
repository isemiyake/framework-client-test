<template>
  <div class="bg-gray-100 min-h-screen font-sans flex flex-col">
    <TheHeader />

    <main class="container mx-auto py-8 px-4 flex flex-wrap">
      <h1 class="text-2xl text-gray-400 w-full text-center mt-10">
        Le magasin est en construction...
      </h1>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>