<template>
  <div class="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <!-- Call Now -->
    <a 
      href="tel:+270119061234"
      class="w-14 h-14 bg-kss-navy text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
    >
      <Phone size="24" />
      <span class="absolute right-full mr-4 bg-kss-navy text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Call Now
      </span>
    </a>

    <!-- WhatsApp -->
    <a 
      href="https://wa.me/27119061234"
      target="_blank"
      class="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
    >
      <WhatsappIcon size="28" />
      <span class="absolute right-full mr-4 bg-green-500 text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  </div>
</template>

<script setup>
import { Phone, MessageCircle as WhatsappIcon } from 'lucide-vue-next'
</script>
