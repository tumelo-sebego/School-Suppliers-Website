<template>
  <header class="w-full z-50">
    <!-- Tier 1: Brand & Contact Info (Blue Background) -->
    <div class="bg-[var(--kss-blue)] text-white py-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-10">
        <!-- Logo / Wordmark -->
        <router-link to="/" class="flex flex-col leading-none group items-center md:items-start">
          <span class="font-bold text-5xl lg:text-7xl tracking-[-0.04em] font-fredoka">Katlehong</span>
          <span class="text-[10px] uppercase tracking-[0.6em] font-semibold text-white/60 mt-2 ml-1">School Suppliers</span>
        </router-link>

        <!-- Placeholder SVG (Center) -->
        <div class="hidden lg:flex items-center justify-center">
          <div class="p-5 bg-white/5 rounded-full border border-white/10">
            <svg viewBox="0 0 100 100" class="w-20 h-20 fill-current text-white/40">
              <path d="M50 15 L85 35 V75 L50 95 L15 75 V35 Z M50 30 L35 40 V65 L50 75 L65 65 V40 Z" />
              <circle cx="50" cy="50" r="10" />
            </svg>
          </div>
        </div>

        <!-- Contact Detail & Hours (Right) -->
        <div class="flex flex-col items-center md:items-end gap-1">
          <div class="flex flex-col items-center md:items-end mb-4 leading-none decoration-white/20 border-b border-white/10 pb-4 w-full md:w-auto">
            <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 mb-1.5">Business Hours:</span>
            <span class="text-xs font-black text-white/90 uppercase italic tracking-widest font-fredoka">Currently Open Now</span>
          </div>

          <div class="flex flex-col items-center md:items-end gap-1">
            <div class="flex items-center gap-2 text-white/50 mb-1">
              <Phone size="14" />
              <span class="text-[9px] font-bold uppercase tracking-[0.3em]">Customer Support</span>
            </div>
            <span class="text-2xl lg:text-4xl font-semibold font-fredoka tracking-tight">+27 11 906 1234</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tier 2: Navigation (White Background) -->
    <nav 
      class="bg-white border-b border-gray-100 py-6 sticky top-0 shadow-sm transition-all duration-300"
      :class="{ 'py-4 shadow-md': isScrolled }"
    >
      <div class="container flex justify-between items-center">
        <!-- Main Navigation Links (Left Button + Centered Links) -->
        <div class="hidden lg:flex items-center justify-between w-full">
          <!-- First Button -->
          <router-link to="/school-uniforms" class="px-8 py-3.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[var(--kss-red)] transition-all duration-300 rounded-full">
            School Uniforms
          </router-link>
          
          <!-- Centered Links -->
          <div class="flex items-center absolute left-1/2 -translate-x-1/2">
            <router-link to="/" class="px-6 py-2 nav-link">Home</router-link>
            <router-link to="/shop" class="px-6 py-2 nav-link">Shop</router-link>
            <router-link to="/catalogs" class="px-6 py-2 nav-link">Catalogs</router-link>
            <router-link to="/price-list" class="px-6 py-2 nav-link">Price List</router-link>
            <router-link to="/contact" class="px-6 py-2 nav-link">Contact</router-link>
          </div>

          <!-- Right Side CTA -->
          <button class="btn-primary shadow-xl shadow-red-500/30">
            Secure Order
          </button>
        </div>
        
        <!-- Mobile Layout -->
        <div class="lg:hidden flex justify-between items-center w-full">
          <router-link to="/school-uniforms" class="px-6 py-2.5 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">
            Uniforms
          </router-link>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[var(--kss-blue)] p-2">
            <Menu v-if="!mobileMenuOpen" size="32" />
            <X v-else size="32" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div 
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[60] bg-[var(--kss-blue)] flex flex-col p-8"
      >
        <div class="flex justify-between items-center mb-12">
          <div class="flex flex-col leading-none">
            <span class="font-black text-2xl tracking-tighter uppercase italic text-white">KSS</span>
            <span class="text-[8px] uppercase tracking-[0.3em] font-bold text-white/60">Suppliers</span>
          </div>
          <button @click="mobileMenuOpen = false" class="text-white">
            <X size="32" />
          </button>
        </div>
        
        <div class="flex flex-col gap-6">
          <router-link @click="mobileMenuOpen = false" to="/" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic">Home</router-link>
          <router-link @click="mobileMenuOpen = false" to="/school-uniforms" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic">Uniforms</router-link>
          <router-link @click="mobileMenuOpen = false" to="/shop" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic">Shop</router-link>
          <router-link @click="mobileMenuOpen = false" to="/catalogs" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic">Catalogs</router-link>
          <router-link @click="mobileMenuOpen = false" to="/contact" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic">Contact</router-link>
        </div>
        
        <div class="mt-auto pt-8 border-t border-white/10 space-y-4">
          <p class="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Direct Contact</p>
          <div class="flex flex-col space-y-4">
            <a href="tel:+270119061234" class="flex items-center gap-4 text-xl font-black text-white">
              <Phone class="text-[var(--kss-red)]" /> +27 11 906 1234
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Phone, Mail, Clock, 
  ChevronDown, Menu, X, FileText 
} from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
