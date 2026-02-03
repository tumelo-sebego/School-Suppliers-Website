<template>
  <header class="w-full z-50">
    <!-- Tier 1: Brand & Contact Info (Blue Background) -->
    <div class="bg-[var(--kss-blue)] text-white py-6">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Logo / Wordmark -->
        <router-link to="/" class="flex flex-col leading-none group">
          <span class="font-black text-4xl lg:text-5xl tracking-tighter uppercase italic font-outfit">Katlehong</span>
          <span class="text-xs uppercase tracking-[0.4em] font-bold text-white/80 mt-1 ml-1">School Suppliers</span>
        </router-link>

        <!-- Placeholder SVG (Center) -->
        <div class="hidden lg:flex items-center justify-center opacity-90">
          <svg viewBox="0 0 100 100" class="w-16 h-16 fill-current text-white/20">
            <path d="M50 10 L90 35 V75 L50 90 L10 75 V35 Z M50 25 L30 40 V65 L50 75 L70 65 V40 Z" />
          </svg>
        </div>

        <!-- Contact Detail (Right) -->
        <div class="flex flex-col items-end gap-1">
          <div class="flex items-center gap-2 text-white/70">
            <Phone size="16" />
            <span class="text-xs font-bold uppercase tracking-widest">Call Center</span>
          </div>
          <span class="text-xl lg:text-3xl font-black font-outfit tracking-tight">+27 11 906 1234</span>
        </div>
      </div>
    </div>

    <!-- Tier 2: Navigation (White Background) -->
    <nav 
      class="bg-white border-b border-gray-100 py-4 sticky top-0 shadow-sm transition-all duration-300"
      :class="{ 'py-2 shadow-md': isScrolled }"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <!-- Main Navigation Links -->
        <div class="hidden lg:flex items-center gap-1">
          <router-link to="/school-uniforms" class="px-6 py-2.5 bg-black text-white text-[11px] font-black uppercase tracking-[0.15em] hover:bg-[var(--kss-red)] transition-colors duration-300 mr-4">
            School Uniforms
          </router-link>
          
          <div class="flex items-center">
            <router-link to="/" class="px-5 py-2 nav-link hover:text-[var(--kss-red)]">Home</router-link>
            <router-link to="/shop" class="px-5 py-2 nav-link hover:text-[var(--kss-red)]">Shop</router-link>
            <router-link to="/catalogs" class="px-5 py-2 nav-link hover:text-[var(--kss-red)]">Catalogs</router-link>
            <router-link to="/price-list" class="px-5 py-2 nav-link hover:text-[var(--kss-red)]">Price List</router-link>
            <router-link to="/contact" class="px-5 py-2 nav-link hover:text-[var(--kss-red)]">Contact</router-link>
          </div>
        </div>

        <!-- Right Side CTA -->
        <div class="flex items-center gap-6">
          <div class="hidden md:flex flex-col items-end leading-none">
            <span class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">We are</span>
            <span class="text-sm font-black text-[var(--kss-blue)] uppercase italic">Now Open</span>
          </div>
          
          <button class="btn-primary py-3 px-8 shadow-lg shadow-red-500/20">
            Order Now
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-[var(--kss-blue)]">
            <Menu v-if="!mobileMenuOpen" size="28" />
            <X v-else size="28" />
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
