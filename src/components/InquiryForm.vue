<template>
  <div class="bg-white shadow-2xl rounded-sm border-t-4 border-kss-yellow p-8">
    <h3 class="text-2xl font-black uppercase italic tracking-tight text-kss-navy mb-2">Request an Inquiry</h3>
    <p class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-8 italic">Fill in the form below and our sales team will contact you shortly.</p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name -->
        <div class="space-y-2">
          <label class="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
          <input 
            v-model="form.name"
            type="text" 
            required
            class="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy outline-none font-bold uppercase text-sm transition-all"
            placeholder="e.g. John Doe"
          />
        </div>
        <!-- Email -->
        <div class="space-y-2">
          <label class="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
          <input 
            v-model="form.email"
            type="email" 
            required
            class="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy outline-none font-bold uppercase text-sm transition-all"
            placeholder="e.g. john@example.com"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Phone -->
        <div class="space-y-2">
          <label class="text-xs font-black uppercase tracking-widest text-gray-500">Phone Number</label>
          <input 
            v-model="form.phone"
            type="tel" 
            required
            class="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy outline-none font-bold uppercase text-sm transition-all"
            placeholder="e.g. 011 906 1234"
          />
        </div>
        <!-- School -->
        <div class="space-y-2">
          <label class="text-xs font-black uppercase tracking-widest text-gray-500">School Name</label>
          <select 
            v-model="form.school"
            class="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy outline-none font-bold uppercase text-sm transition-all appearance-none"
          >
            <option value="">Select a school (Optional)</option>
            <option v-for="s in schools" :key="s.id" :value="s.name">{{ s.name }}</option>
          </select>
        </div>
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <label class="text-xs font-black uppercase tracking-widest text-gray-500">Your Inquiry / Order List</label>
        <textarea 
          v-model="form.message"
          rows="5" 
          required
          class="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-kss-navy outline-none font-bold uppercase text-sm transition-all resize-none"
          placeholder="Please list the items you are interested in..."
        ></textarea>
      </div>

      <!-- Submit -->
      <button 
        type="submit" 
        :disabled="submitting"
        class="btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-50"
      >
        <Send v-if="!submitting" size="20" />
        <Loader2 v-else size="20" class="animate-spin" />
        <span>{{ submitting ? 'Sending Request...' : 'Submit Inquiry' }}</span>
      </button>

      <!-- Feedback -->
      <div v-if="success" class="bg-green-50 border-l-4 border-green-500 p-4 text-green-700 font-bold uppercase text-xs tracking-widest">
        Thank you! Your inquiry has been sent successfully. We will be in touch.
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Send, Loader2 } from 'lucide-vue-next'

defineProps({
  schools: Array
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  school: '',
  message: ''
})

const submitting = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  submitting.value = false
  success.value = true
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  }
}
</script>
