<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <section class="bg-kss-navy text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-black uppercase italic tracking-tighter mb-4">Official Price List</h1>
        <p class="text-xl text-gray-400 font-bold uppercase tracking-wider">Generic items and standard equipment across all schools.</p>
      </div>
    </section>

    <!-- Table Content -->
    <div class="container mx-auto px-4 -mt-10">
      <div class="bg-white shadow-2xl rounded-sm overflow-hidden border-t-4 border-kss-yellow">
        <!-- Table Controls -->
        <div class="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="relative w-full md:w-96">
            <input 
              v-model="search"
              type="text" 
              placeholder="Search price list..."
              class="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy focus:bg-white outline-none rounded-sm transition-all font-bold uppercase text-sm"
            />
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size="18" />
          </div>
          <button class="btn-primary flex items-center gap-2">
            <Download size="18" /> Download PDF
          </button>
        </div>

        <!-- Data Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-gray-50 text-kss-navy uppercase text-xs font-black tracking-[0.2em] border-b-2 border-gray-100">
              <tr>
                <th class="px-8 py-4 cursor-pointer hover:bg-gray-100" @click="sortBy('name')">
                  Item Name <ChevronDown v-if="sortKey === 'name'" size="14" class="inline" />
                </th>
                <th class="px-8 py-4 cursor-pointer hover:bg-gray-100" @click="sortBy('category')">
                  Category <ChevronDown v-if="sortKey === 'category'" size="14" class="inline" />
                </th>
                <th class="px-8 py-4 cursor-pointer hover:bg-gray-100" @click="sortBy('price')">
                  Price (ZAR) <ChevronDown v-if="sortKey === 'price'" size="14" class="inline" />
                </th>
                <th class="px-8 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 font-bold text-sm">
              <tr v-for="item in sortedItems" :key="item.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-8 py-6 text-kss-navy uppercase">{{ item.name }}</td>
                <td class="px-8 py-6">
                  <span class="px-3 py-1 bg-gray-100 text-[10px] uppercase font-black tracking-widest text-gray-500 rounded-sm">
                    {{ item.category }}
                  </span>
                </td>
                <td class="px-8 py-6 text-lg font-black italic">R {{ item.price.toFixed(2) }}</td>
                <td class="px-8 py-6 text-center">
                  <button class="text-kss-navy hover:text-kss-yellow transition-colors">
                    <MessageSquare size="20" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, Download, ChevronDown, MessageSquare } from 'lucide-vue-next'

const search = ref('')
const sortKey = ref('name')
const sortOrder = ref(1)

const items = ref([
  { id: 1, name: 'Standard Grey Trousers', category: 'General', price: 185 },
  { id: 2, name: 'White Short Sleeve Shirt', category: 'General', price: 95 },
  { id: 3, name: 'Cotton School Socks (3pk)', category: 'Accessories', price: 60 },
  { id: 4, name: 'Leather School Shoes', category: 'Footwear', price: 350 },
  { id: 5, name: 'Canvas School Backpack', category: 'Luggage', price: 220 },
  { id: 6, name: 'Standard Black Blazer', category: 'General', price: 420 },
  { id: 7, name: 'School Tie (Plain)', category: 'Accessories', price: 45 },
  { id: 8, name: 'V-Neck Pullover (Navy)', category: 'General', price: 195 },
])

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1
  } else {
    sortKey.value = key
    sortOrder.value = 1
  }
}

const filteredItems = computed(() => {
  return items.value.filter(item => 
    item.name.toLowerCase().includes(search.value.toLowerCase()) ||
    item.category.toLowerCase().includes(search.value.toLowerCase())
  )
})

const sortedItems = computed(() => {
  return [...filteredItems.value].sort((a, b) => {
    let result = 0
    if (a[sortKey.value] < b[sortKey.value]) result = -1
    if (a[sortKey.value] > b[sortKey.value]) result = 1
    return result * sortOrder.value
  })
})
</script>
