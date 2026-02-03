<template>
  <header class="w-full z-50">
    <!-- Tier 1: Brand & Business Info (Blue Background) -->
    <div class="bg-[var(--kss-blue)] text-white py-10">
      <div class="container flex flex-col lg:flex-row justify-between items-center gap-12">
        <!-- Logo / Wordmark -->
        <router-link to="/" class="flex flex-col leading-none group items-center lg:items-start shrink-0">
          <span class="font-bold text-5xl lg:text-6xl tracking-[-0.04em] font-fredoka">Katlehong</span>
          <span class="text-[9px] uppercase tracking-[0.6em] font-semibold text-white/50 mt-2 ml-1">School Suppliers</span>
        </router-link>

        <!-- Business & Contact Info Group (Right Side on Desktop) -->
        <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <!-- Business Status & Hours -->
          <div class="flex items-center gap-5">
            <!-- Icon Circle -->
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/10 shrink-0">
              <Clock size="24" class="text-[var(--kss-blue)]" />
            </div>
            <!-- Info Column -->
            <div class="flex flex-col leading-tight">
              <span 
                class="text-xs font-black uppercase italic tracking-widest mb-1 font-fredoka"
                :class="isBusinessOpen ? 'text-white' : 'text-[var(--kss-red)]'"
              >
                {{ isBusinessOpen ? 'Currently Open Now' : 'Business Closed Now' }}
              </span>
              <span class="text-[10px] uppercase tracking-widest text-white/60 font-medium">Mon - Fri: 08:00 - 17:00</span>
              <span class="text-[10px] uppercase tracking-widest text-white/60 font-medium">Sat - Sun: By Appointment</span>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="flex items-center gap-5">
           
            <!-- Info Column -->
            <div class="flex flex-col leading-tight">
              <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Call Center</span>
              <span class="text-2xl lg:text-3xl font-semibold font-fredoka tracking-tight">+27 11 906 1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tier 2: Navigation (White Background) -->
    <nav 
      class="bg-white border-b border-gray-100 py-6 sticky top-0 shadow-sm transition-all duration-300"
      :class="{ 'py-4 shadow-md': isScrolled }"
    >
      <div class="container flex justify-between items-center relative">
        <!-- Left Side: Uniforms Button -->
        <div class="hidden lg:block z-10">
          <router-link to="/school-uniforms" class="px-8 py-3.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[var(--kss-red)] transition-all duration-300 rounded-full inline-block">
            School Uniforms
          </router-link>
        </div>
        
        <!-- Center: Navigation Links -->
        <div class="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 justify-center w-full pointer-events-none">
          <div class="flex items-center pointer-events-auto">
            <router-link to="/" class="px-6 py-2 nav-link">Home</router-link>
            <router-link to="/shop" class="px-6 py-2 nav-link">Shop</router-link>
            <router-link to="/catalogs" class="px-6 py-2 nav-link">Catalogs</router-link>
            <router-link to="/price-list" class="px-6 py-2 nav-link">Price List</router-link>
            <router-link to="/contact" class="px-6 py-2 nav-link">Contact</router-link>
          </div>
        </div>

        <!-- Right Side: Order Button / Mobile Toggle -->
        <div class="flex items-center gap-4 z-10">
          <button class="hidden md:block btn-primary shadow-xl shadow-red-500/30">
            Secure Order
          </button>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-[var(--kss-blue)] p-2">
            <Menu v-if="!mobileMenuOpen" size="32" />
            <X v-else size="32" />
          </button>
        </div>

        <!-- Mobile Uniforms Button (Visible only on mobile) -->
        <div class="lg:hidden absolute left-4 top-1/2 -translate-y-1/2">
          <router-link to="/school-uniforms" class="px-5 py-2.5 bg-black text-white text-[8px] font-bold uppercase tracking-[0.15em] rounded-full inline-block">
            Uniforms
          </router-link>
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
            <span class="font-black text-2xl tracking-tighter uppercase italic text-white font-fredoka">KSS</span>
            <span class="text-[8px] uppercase tracking-[0.3em] font-bold text-white/60">Suppliers</span>
          </div>
          <button @click="mobileMenuOpen = false" class="text-white">
            <X size="32" />
          </button>
        </div>
        
        <div class="flex flex-col gap-6">
          <router-link @click="mobileMenuOpen = false" to="/" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Home</router-link>
          <router-link @click="mobileMenuOpen = false" to="/school-uniforms" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Uniforms</router-link>
          <router-link @click="mobileMenuOpen = false" to="/shop" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Shop</router-link>
          <router-link @click="mobileMenuOpen = false" to="/catalogs" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Catalogs</router-link>
          <router-link @click="mobileMenuOpen = false" to="/price-list" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Price List</router-link>
          <router-link @click="mobileMenuOpen = false" to="/contact" class="text-4xl font-black uppercase text-white hover:text-[var(--kss-red)] italic font-fredoka">Contact</router-link>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { 
  Phone, Clock, Menu, X 
} from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

// Business status logic
const isBusinessOpen = computed(() => {
  const now = new Date()
  // Current time adjusted to South African Time (GMT+2)
  const day = now.getDay() // 0 = Sunday, 1 = Monday, ...
  const hour = now.getHours()
  
  // Mon - Fri: 08:00 - 17:00
  if (day >= 1 && day <= 5) {
    return hour >= 8 && hour < 17
  }
  
  // Saturday & Sunday: By Appointment Only (effectively closed for auto-indicator)
  return false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
</style>
