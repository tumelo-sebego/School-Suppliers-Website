<template>
  <footer class="bg-kss-navy text-white pt-20 pb-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Info -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-kss-yellow flex items-center justify-center rounded-sm">
              <span class="text-kss-navy font-black text-2xl">KSS</span>
            </div>
            <div class="flex flex-col leading-tight">
              <span class="font-black text-2xl tracking-tighter uppercase italic">Katlehong</span>
              <span class="text-[12px] uppercase tracking-[0.3em] font-bold text-kss-yellow -mt-1">School Suppliers</span>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Leading suppliers of high-quality school uniforms, textbooks, and educational stationery in the Katlehong region. Committed to excellence since 1998.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold uppercase tracking-wider border-l-4 border-kss-yellow pl-4">Quick Links</h4>
          <ul class="space-y-3 text-sm font-bold text-gray-400">
            <li><router-link to="/" class="hover:text-white transition-colors uppercase italic">Home</router-link></li>
            <li><router-link to="/price-list" class="hover:text-white transition-colors uppercase italic">Price List</router-link></li>
            <li><router-link to="#" class="hover:text-white transition-colors uppercase italic">School Catalog</router-link></li>
            <li><router-link to="#" class="hover:text-white transition-colors uppercase italic">Request Quote</router-link></li>
          </ul>
        </div>

        <!-- School Catalogs -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold uppercase tracking-wider border-l-4 border-kss-yellow pl-4">Our Schools</h4>
          <ul class="space-y-3 text-sm font-bold text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors uppercase italic">Katlehong Secondary</a></li>
            <li><a href="#" class="hover:text-white transition-colors uppercase italic">Kwanele Primary</a></li>
            <li><a href="#" class="hover:text-white transition-colors uppercase italic">Phaswane High</a></li>
            <li><a href="#" class="hover:text-white transition-colors uppercase italic">Sijabulile Secondary</a></li>
          </ul>
        </div>

        <!-- Contact Detail -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold uppercase tracking-wider border-l-4 border-kss-yellow pl-4">Visit Us</h4>
          <div class="space-y-4 text-sm">
            <div class="flex items-start gap-4">
              <MapPin class="text-kss-yellow shrink-0" size="20" />
              <p class="text-gray-400 font-bold uppercase italic">
                1234 Bierman Road,<br />
                Vosloorus, Katlehong,<br />
                Gauteng, 1475
              </p>
            </div>
            <div class="flex items-center gap-4">
              <Phone class="text-kss-yellow shrink-0" size="20" />
              <p class="text-gray-400 font-bold italic">+27 (011) 906 1234</p>
            </div>
            <div class="flex items-center gap-4">
              <Mail class="text-kss-yellow shrink-0" size="20" />
              <p class="text-gray-400 font-bold italic">info@kss-suppliers.co.za</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">
          © 2026 Katlehong School Suppliers. All Rights Reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-gray-500 hover:text-kss-yellow transition-colors"><Facebook size="20" /></a>
          <a href="#" class="text-gray-500 hover:text-kss-yellow transition-colors"><Instagram size="20" /></a>
          <a href="#" class="text-gray-500 hover:text-kss-yellow transition-colors"><Twitter size="20" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-vue-next'
</script>
