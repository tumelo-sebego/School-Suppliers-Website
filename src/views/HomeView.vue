<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center bg-kss-navy text-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 48" :key="i" class="border-r border-b border-white h-32"></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl space-y-8">
          <div class="inline-block px-4 py-1 bg-kss-yellow text-kss-navy text-xs font-black uppercase tracking-[0.3em] rounded-sm">
            Trusted since 1998
          </div>
          <h1 class="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
            Industrial Grade <br />
            <span class="text-kss-yellow">School Supplies</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 font-bold uppercase tracking-wider max-w-2xl leading-relaxed">
            Leading suppliers of authoritative school uniforms and educational equipment in the Katlehong region.
          </p>
          <div class="flex flex-wrap gap-6 pt-4">
            <button @click="scrollToCatalog" class="btn-primary py-4 px-10 text-lg">Browse Schools</button>
            <router-link to="/price-list" class="btn-outline py-4 px-10 text-lg flex items-center gap-2">
              <ClipboardList size="24" /> View Pricing
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats / Trust Bar -->
    <section class="bg-gray-50 border-b border-gray-100 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center space-y-2">
            <div class="text-3xl font-black text-kss-navy tracking-tighter uppercase italic">{{ stat.value }}</div>
            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- School Catalog Grid -->
    <section id="catalog" class="py-32 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div class="space-y-4">
            <h2 class="text-5xl font-black uppercase italic tracking-tighter text-kss-navy">
              Partner <span class="text-kss-yellow italic">Schools</span>
            </h2>
            <p class="text-lg text-gray-500 font-bold uppercase tracking-wider">Select your institution to view specific uniform requirements.</p>
          </div>
          <router-link to="/price-list" class="text-kss-navy font-black uppercase tracking-widest text-sm hover:text-kss-yellow transition-colors underline decoration-2 underline-offset-8">
            View Generic Price List
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <router-link 
            v-for="school in catalogStore.schools" 
            :key="school.id"
            :to="'/schools/' + school.slug"
            class="group bg-gray-50 p-8 border-l-8 border-transparent hover:border-kss-yellow hover:bg-white hover:shadow-2xl transition-all duration-300 rounded-sm"
          >
            <div class="w-16 h-16 bg-white flex items-center justify-center mb-12 shadow-sm rounded-sm group-hover:scale-110 transition-transform">
              <SchoolIcon class="text-kss-navy" size="32" />
            </div>
            <h3 class="text-2xl font-black uppercase tracking-tight text-kss-navy mb-4 group-hover:text-kss-yellow transition-colors">
              {{ school.name }}
            </h3>
            <p class="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Browse Catalog <ArrowRight size="14" />
            </p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact & Inquiry -->
    <section class="py-32 bg-gray-50 border-t border-gray-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div class="space-y-12">
            <div class="space-y-6">
              <h2 class="text-5xl font-black uppercase italic tracking-tighter text-kss-navy leading-none">
                Direct Lead <br />
                <span class="text-kss-yellow italic">Generation</span>
              </h2>
              <p class="text-xl text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                Our inquiry system is built for speed. Get a quote for your school supplies within 24 hours.
              </p>
            </div>

            <div class="space-y-8">
              <div v-for="feature in features" :key="feature.title" class="flex gap-6">
                <div class="w-12 h-12 shrink-0 bg-kss-navy text-white flex items-center justify-center rounded-sm">
                  <component :is="feature.icon" size="24" />
                </div>
                <div class="space-y-1">
                  <h4 class="text-lg font-black uppercase tracking-tight text-kss-navy">{{ feature.title }}</h4>
                  <p class="text-sm text-gray-400 font-bold uppercase tracking-wide leading-relaxed italic">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <InquiryForm :schools="catalogStore.schools" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ClipboardList, ArrowRight, School as SchoolIcon, 
  ShieldCheck, Truck, Clock, Headphones 
} from 'lucide-vue-next'
import { useCatalogStore } from '../store/catalog'
import InquiryForm from '../components/InquiryForm.vue'

const catalogStore = useCatalogStore()

const stats = [
  { value: '25+', label: 'Partner Schools' },
  { value: '5k+', label: 'Happy Families' },
  { value: '28yrs', label: 'Established' },
  { value: '100%', label: 'Quality Gear' },
]

const features = [
  { 
    title: 'Durable Quality', 
    desc: 'Uniforms built to withstand the rigors of school life.', 
    icon: ShieldCheck 
  },
  { 
    title: 'Fast Inquiry', 
    desc: 'Real-time quotes with direct WhatsApp connectivity.', 
    icon: Headphones 
  },
  { 
    title: 'Always In Stock', 
    desc: 'Local warehouse ensures immediate availability.', 
    icon: Clock 
  }
]

const scrollToCatalog = () => {
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
