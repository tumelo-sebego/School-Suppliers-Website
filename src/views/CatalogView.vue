<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- School Hero -->
    <section v-if="school" class="bg-kss-navy text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-6 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-b border-white h-40"></div>
        </div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <nav class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kss-yellow mb-4">
          <router-link to="/" class="hover:underline">Home</router-link>
          <ChevronRight size="12" />
          <span>Schools</span>
          <ChevronRight size="12" />
          <span class="text-white">{{ school.name }}</span>
        </nav>
        <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
          {{ school.name }}
        </h1>
        <p class="text-xl text-gray-400 font-bold uppercase tracking-wider max-w-2xl">
          Official Uniform & Stationery Supplier for {{ school.name }}.
        </p>
      </div>
    </section>

    <!-- Catalog Content -->
    <div v-if="school" class="container mx-auto px-4 -mt-10 relative z-20">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <aside class="w-full lg:w-80 space-y-8">
          <div class="bg-white p-6 shadow-xl rounded-sm border-t-4 border-kss-yellow">
            <h3 class="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
              <Filter size="20" class="text-kss-navy" />
              Filter Catalog
            </h3>
            
            <!-- Search -->
            <div class="space-y-4">
              <label class="text-xs font-black uppercase tracking-widest text-gray-500">Search Product</label>
              <div class="relative">
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="e.g. Blazer..."
                  class="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy focus:bg-white outline-none rounded-sm transition-all font-bold uppercase text-sm"
                />
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size="18" />
              </div>
            </div>

            <!-- Categories -->
            <div class="mt-8 space-y-4">
              <label class="text-xs font-black uppercase tracking-widest text-gray-500">Categories</label>
              <div class="flex flex-col gap-2">
                <button 
                  v-for="cat in categories" 
                  :key="cat"
                  @click="activeCategory = cat"
                  :class="[
                    'text-left px-4 py-2 text-sm font-bold uppercase tracking-tighter transition-all',
                    activeCategory === cat ? 'bg-kss-navy text-white' : 'hover:bg-gray-100 text-gray-600'
                  ]"
                >
                  {{ cat }}
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-kss-navy p-8 text-white shadow-xl rounded-sm space-y-6">
            <h4 class="text-xl font-black uppercase italic tracking-tight">Need Help?</h4>
            <p class="text-sm text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
              If you can't find a specific item or need a bulk quote, contact our support team.
            </p>
            <div class="flex flex-col gap-4">
              <button class="btn-primary w-full flex items-center justify-center gap-2">
                <Phone size="18" /> Call Sales
              </button>
              <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-[4px] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider text-sm">
                <WhatsappIcon size="18" /> WhatsApp Us
              </button>
            </div>
          </div>
        </aside>

        <!-- Product Grid -->
        <main class="flex-grow">
          <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="product in filteredProducts" 
              :key="product.id"
              class="bg-white border border-gray-100 hover:border-kss-navy hover:shadow-2xl transition-all group rounded-sm"
            >
              <div class="aspect-square bg-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <Package size="64" class="text-gray-300 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <!-- Badge -->
                <div class="absolute top-4 left-4 bg-kss-navy text-white px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                  {{ product.category }}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-black uppercase tracking-tight text-kss-navy mb-2 line-clamp-1">
                  {{ product.name }}
                </h3>
                <p class="text-2xl font-black text-gray-900 mb-6">
                  R {{ product.price.toFixed(2) }}
                </p>
                <button class="btn-outline w-full flex items-center justify-center gap-2">
                  <ShoppingBag size="18" /> Inquire
                </button>
              </div>
            </div>
          </div>
          <div v-else class="bg-white p-20 text-center shadow-md rounded-sm">
            <Package size="64" class="mx-auto text-gray-200 mb-6" />
            <h3 class="text-2xl font-black uppercase text-kss-navy mb-2">No items found</h3>
            <p class="text-gray-400 font-bold uppercase tracking-wider italic">Try adjusting your filters or contact us for help.</p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCatalogStore } from '../store/catalog'
import { 
  ChevronRight, Filter, Search, 
  Package, ShoppingBag, Phone,
  MessageCircle as WhatsappIcon 
} from 'lucide-vue-next'

const route = useRoute()
const catalogStore = useCatalogStore()

const school = ref(null)
const products = ref([])
const searchQuery = ref('')
const activeCategory = ref('All')

const categories = ['All', 'Uniform', 'Accessories', 'Textbooks', 'Stationery']

onMounted(async () => {
  const slug = route.params.name
  school.value = await catalogStore.getSchoolBySlug(slug)
  if (school.value) {
    products.value = await catalogStore.getProductsBySchool(school.value.id)
  }
})

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = activeCategory.value === 'All' || p.category === activeCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>
