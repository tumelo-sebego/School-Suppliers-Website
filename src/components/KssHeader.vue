<template>
  <header class="header">
    <!-- MOBILE LAYOUT -->
    <div class="mobile-layout">
      <!-- Mobile Tier 1: White thin strip with Status & Contact -->
      <div class="mobile-tier-1">
        <div class="container mobile-tier-1-content">
          <!-- Business Status (Left) -->
          <div class="mobile-status-group">
            <div class="mobile-status-icon">
              <Clock size="12" class="text-white" />
            </div>
            <span 
              class="mobile-status-text"
              :class="isBusinessOpen ? 'text-open' : 'text-closed'"
            >
              {{ isBusinessOpen ? 'Open Now' : 'Closed' }}
            </span>
          </div>
          
          <!-- Contact Number (Right) -->
          <a href="tel:+270119061234" class="mobile-contact-link">
            +27 11 906 1234
          </a>
        </div>
      </div>

      <!-- Mobile Tier 2: Blue with Logo & Menu -->
      <div class="mobile-tier-2">
        <div class="container mobile-tier-2-content">
          <!-- Logo (Left) -->
          <router-link to="/" class="mobile-logo">
            <span class="mobile-logo-main">Katlehong</span>
            <span class="mobile-logo-sub">School Suppliers</span>
          </router-link>
          
          <!-- Hamburger Menu (Right) -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-btn">
            <Menu v-if="!mobileMenuOpen" size="28" />
            <X v-else size="28" />
          </button>
        </div>
      </div>
    </div>

    <!-- DESKTOP LAYOUT -->
    <div class="desktop-layout">
      <!-- Desktop Tier 1: Brand & Business Info (Blue Background) -->
      <div class="desktop-tier-1">
        <div class="container desktop-tier-1-content">
          <!-- Logo / Wordmark -->
          <router-link to="/" class="desktop-logo">
            <span class="desktop-logo-main">Katlehong</span>
            <span class="desktop-logo-sub">School Suppliers</span>
          </router-link>

          <!-- Business & Contact Info Group (Right Side on Desktop) -->
          <div class="desktop-info-group">
            <!-- Business Status & Hours -->
            <div class="desktop-status-block">
              <!-- Icon Circle -->
              <div class="desktop-status-icon">
                <Clock size="24" class="text-[var(--kss-blue)]" />
              </div>
              <!-- Info Column -->
              <div class="desktop-status-info">
                <span 
                  class="desktop-status-text"
                  :class="isBusinessOpen ? 'text-white' : 'text-[var(--kss-red)]'"
                >
                  {{ isBusinessOpen ? 'Currently Open Now' : 'Business Closed Now' }}
                </span>
                <span class="desktop-hours-text">Mon - Fri: 08:00 - 17:00</span>
                <span class="desktop-hours-text">Sat - Sun: By Appointment</span>
              </div>
            </div>

            <!-- Contact Details -->
            <div class="desktop-contact-block">
              <!-- Info Column -->
              <div class="desktop-contact-info">
                <span class="desktop-contact-label">Call Center</span>
                <span class="desktop-contact-number">+27 11 906 1234</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Tier 2: Navigation (White Background) -->
      <nav 
        class="desktop-nav"
        :class="{ 'nav-scrolled': isScrolled }"
      >
        <div class="container desktop-nav-content">
          <!-- Left Side: Uniforms Button -->
          <div class="nav-left">
            <router-link to="/school-uniforms" class="uniforms-btn">
              School Uniforms
            </router-link>
          </div>
          
          <!-- Center: Navigation Links -->
          <div class="nav-center-wrapper">
            <div class="nav-center">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/shop" class="nav-link">Shop</router-link>
              <router-link to="/catalogs" class="nav-link">Catalogs</router-link>
              <router-link to="/price-list" class="nav-link">Price List</router-link>
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </div>
          </div>

          <!-- Right Side: Order Button -->
          <div class="nav-right">
            <button class="btn-primary shadow-xl shadow-red-500/30">
              Secure Order
            </button>
          </div>
        </div>
      </nav>
    </div>

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
        class="mobile-menu-overlay"
      >
        <div class="mobile-menu-header">
          <div class="mobile-menu-logo">
            <span class="mobile-menu-logo-main">KSS</span>
            <span class="mobile-menu-logo-sub">Suppliers</span>
          </div>
          <button @click="mobileMenuOpen = false" class="mobile-menu-close">
            <X size="32" />
          </button>
        </div>
        
        <div class="mobile-menu-links">
          <router-link @click="mobileMenuOpen = false" to="/" class="mobile-menu-link">Home</router-link>
          <router-link @click="mobileMenuOpen = false" to="/school-uniforms" class="mobile-menu-link">Uniforms</router-link>
          <router-link @click="mobileMenuOpen = false" to="/shop" class="mobile-menu-link">Shop</router-link>
          <router-link @click="mobileMenuOpen = false" to="/catalogs" class="mobile-menu-link">Catalogs</router-link>
          <router-link @click="mobileMenuOpen = false" to="/price-list" class="mobile-menu-link">Price List</router-link>
          <router-link @click="mobileMenuOpen = false" to="/contact" class="mobile-menu-link">Contact</router-link>
        </div>
        
        <div class="mobile-menu-footer">
          <p class="mobile-menu-footer-label">Direct Contact</p>
          <div class="mobile-menu-footer-contact">
            <a href="tel:+270119061234" class="mobile-menu-footer-phone">
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
/* Header Base */
.header {
  width: 100%;
  z-index: 50;
}

/* Mobile Layout */
.mobile-layout {
  display: block;
}

@media (min-width: 1024px) {
  .mobile-layout {
    display: none;
  }
}

/* Mobile Tier 1 */
.mobile-tier-1 {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 0;
}

.mobile-tier-1-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-status-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-status-icon {
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--kss-blue);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mobile-status-text {
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 0.05em;
}

.text-open {
  color: var(--kss-blue);
}

.text-closed {
  color: var(--kss-red);
}

.mobile-contact-link {
  font-size: 12px;
  font-weight: 700;
  color: var(--kss-blue);
  letter-spacing: 0.025em;
}

/* Mobile Tier 2 */
.mobile-tier-2 {
  background-color: var(--kss-blue);
  color: white;
  padding: 1rem 0;
}

.mobile-tier-2-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.mobile-logo-main {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.mobile-logo-sub {
  font-size: 7px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.125rem;
}

.mobile-menu-btn {
  color: white;
  padding: 0.5rem;
}

/* Desktop Layout */
.desktop-layout {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-layout {
    display: block;
  }
}

/* Desktop Tier 1 */
.desktop-tier-1 {
  background-color: var(--kss-blue);
  color: white;
  padding: 2.5rem 0;
}

.desktop-tier-1-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .desktop-tier-1-content {
    flex-direction: row;
  }
}

.desktop-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  align-items: center;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .desktop-logo {
    align-items: flex-start;
  }
}

.desktop-logo-main {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: -0.04em;
}

@media (min-width: 1024px) {
  .desktop-logo-main {
    font-size: 3.75rem;
  }
}

.desktop-logo-sub {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.6em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  margin-left: 0.25rem;
}

.desktop-info-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .desktop-info-group {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .desktop-info-group {
    gap: 4rem;
  }
}

.desktop-status-block {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.desktop-status-icon {
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.desktop-status-info {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.desktop-status-text {
  font-family: 'Fredoka', sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}

.desktop-hours-text {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.desktop-contact-block {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.desktop-contact-info {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.desktop-contact-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.25rem;
}

.desktop-contact-number {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

@media (min-width: 1024px) {
  .desktop-contact-number {
    font-size: 1.875rem;
  }
}

/* Desktop Navigation */
.desktop-nav {
  background-color: white;
  border-bottom: 1px solid #f3f4f6;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.nav-scrolled {
  padding: 1rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.desktop-nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-left {
  z-index: 10;
}

.uniforms-btn {
  padding: 0.875rem 2rem;
  background-color: black;
  color: white;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  border-radius: 9999px;
  display: inline-block;
  transition: all 0.3s;
}

.uniforms-btn:hover {
  background-color: var(--kss-red);
}

.nav-center-wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

.nav-center {
  display: flex;
  align-items: center;
  pointer-events: auto;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  background-color: var(--kss-blue);
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.mobile-menu-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.mobile-menu-logo-main {
  font-family: 'Fredoka', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  font-style: italic;
  color: white;
}

.mobile-menu-logo-sub {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
}

.mobile-menu-close {
  color: white;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu-link {
  font-family: 'Fredoka', sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  font-style: italic;
  transition: color 0.2s;
}

.mobile-menu-link:hover {
  color: var(--kss-red);
}

.mobile-menu-footer {
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu-footer-label {
  font-size: 10px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.3em;
}

.mobile-menu-footer-contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu-footer-phone {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 900;
  color: white;
}
</style>
