<template>
  <div class="flex flex-col min-h-screen">
    <KssHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <KssFooter />
    <FloatingContact />
  </div>
</template>

<script setup>
import KssHeader from './components/KssHeader.vue'
import KssFooter from './components/KssFooter.vue'
import FloatingContact from './components/FloatingContact.vue'
</script>

<style>
</style>
