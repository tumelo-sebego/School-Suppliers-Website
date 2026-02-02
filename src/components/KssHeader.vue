<template>
  <header class="w-full z-50">
    <!-- Tier 1: Utility Bar -->
    <div class="bg-white border-b border-gray-100 py-2 hidden md:block">
      <div class="container mx-auto px-4 flex justify-between items-center text-xs font-semibold text-gray-500 uppercase tracking-widest">
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-2">
            <MapPin size="14" class="text-kss-navy" />
            Katlehong, Gauteng, RSA
          </span>
          <span class="flex items-center gap-2">
            <Phone size="14" class="text-kss-navy" />
            +27 (011) 906 1234
          </span>
        </div>
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-2">
            <Mail size="14" class="text-kss-navy" />
            info@kss-suppliers.co.za
          </span>
          <span class="flex items-center gap-2">
            <Clock size="14" class="text-kss-navy" />
            Mon - Fri: 08:00 - 17:00
          </span>
        </div>
      </div>
    </div>

    <!-- Tier 2: Sticky Brand Bar -->
    <nav 
      class="bg-kss-navy text-white py-4 sticky top-0 shadow-lg transition-all duration-300"
      :class="{ 'py-3': isScrolled }"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-kss-yellow flex items-center justify-center rounded-sm">
            <span class="text-kss-navy font-black text-xl">KSS</span>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="font-black text-xl tracking-tighter uppercase italic">Katlehong</span>
            <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-kss-yellow -mt-1">School Suppliers</span>
          </div>
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/price-list" class="nav-link">Price List</router-link>
          <div class="relative group">
            <button class="nav-link flex items-center gap-1 group">
              Schools <ChevronDown size="14" class="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <!-- Mock Dropdown -->
            <div class="absolute top-full left-0 mt-4 w-64 bg-white shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-kss-yellow">
              <div class="p-2 flex flex-col">
                <router-link href="#" class="px-4 py-2 text-sm font-bold text-kss-navy hover:bg-gray-50 uppercase tracking-tight">Katlehong Secondary</router-link>
                <router-link href="#" class="px-4 py-2 text-sm font-bold text-kss-navy hover:bg-gray-50 uppercase tracking-tight">Kwanele Primary</router-link>
                <router-link href="#" class="px-4 py-2 text-sm font-bold text-kss-navy hover:bg-gray-50 uppercase tracking-tight">Phaswane High</router-link>
              </div>
            </div>
          </div>
          <button class="nav-link">Contact</button>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center gap-4">
          <button class="btn-primary flex items-center gap-2">
            <FileText size="18" />
            <span class="hidden sm:inline">Request Quote</span>
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-white">
            <Menu v-if="!mobileMenuOpen" size="28" />
            <X v-else size="28" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-[60] bg-kss-navy flex flex-col p-8 space-y-8 animate-in slide-in-from-right duration-300"
    >
      <div class="flex justify-between items-center mb-8">
        <span class="text-2xl font-black italic uppercase">KSS Menu</span>
        <button @click="mobileMenuOpen = false" class="text-kss-yellow">
          <X size="32" />
        </button>
      </div>
      <router-link @click="mobileMenuOpen = false" to="/" class="text-4xl font-black uppercase text-white hover:text-kss-yellow italic">Home</router-link>
      <router-link @click="mobileMenuOpen = false" to="/price-list" class="text-4xl font-black uppercase text-white hover:text-kss-yellow italic">Price List</router-link>
      <router-link @click="mobileMenuOpen = false" to="#" class="text-4xl font-black uppercase text-white hover:text-kss-yellow italic">School Catalogs</router-link>
      <router-link @click="mobileMenuOpen = false" to="#" class="text-4xl font-black uppercase text-white hover:text-kss-yellow italic">Contact Us</router-link>
      
      <div class="mt-auto pt-8 border-t border-white/10 space-y-4">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Direct Contact</p>
        <div class="flex flex-col space-y-4">
          <a href="tel:+270119061234" class="flex items-center gap-4 text-xl font-bold">
            <Phone class="text-kss-yellow" /> +27 (011) 906 1234
          </a>
          <a href="mailto:info@kss-suppliers.co.za" class="flex items-center gap-4 text-xl font-bold">
            <Mail class="text-kss-yellow" /> info@kss-suppliers.co.za
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  MapPin, Phone, Mail, Clock, 
  ChevronDown, Menu, X, FileText 
} from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
