<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Left Student Image -->
        <div class="hero-student hero-student-left">
          <img 
            src="C:/Users/tumelo/.gemini/antigravity/brain/2171fb65-8f4f-4391-9007-4ba0b30a7c99/hero_student_left_1770110894178.png" 
            alt="Happy student with school supplies"
            class="hero-student-img"
          />
        </div>

        <!-- Center Content -->
        <div class="hero-content">
          <h1 class="hero-title">
            Quality for Every<br />
            Little Scholar!
          </h1>
          <p class="hero-subtitle">
            Trusted school uniforms and supplies for Katlehong families since 1998
          </p>
          <div class="hero-buttons">
            <button @click="scrollToCatalog" class="hero-btn hero-btn-primary">
              Browse Schools
            </button>
            <router-link to="/price-list" class="hero-btn hero-btn-secondary">
              View Pricing
            </router-link>
          </div>
        </div>

        <!-- Right Student Image -->
        <div class="hero-student hero-student-right">
          <img 
            src="C:/Users/tumelo/.gemini/antigravity/brain/2171fb65-8f4f-4391-9007-4ba0b30a7c99/hero_student_right_1770110913700.png" 
            alt="Happy student with school supplies"
            class="hero-student-img"
          />
        </div>
      </div>

      <!-- Decorative floating elements -->
      <div class="hero-decorations">
        <div class="hero-decoration hero-decoration-1"></div>
        <div class="hero-decoration hero-decoration-2"></div>
        <div class="hero-decoration hero-decoration-3"></div>
        <div class="hero-decoration hero-decoration-4"></div>
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
            <h2 class="section-title-primary text-5xl font-black uppercase italic tracking-tighter font-fredoka">
              Partner <span class="section-title-accent italic">Schools</span>
            </h2>
            <p class="text-lg text-gray-500 font-bold uppercase tracking-wider">Select your institution to view specific uniform requirements.</p>
          </div>
          <router-link to="/price-list" class="link-primary font-black uppercase tracking-widest text-sm underline decoration-2 underline-offset-8">
            View Generic Price List
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <router-link 
            v-for="school in catalogStore.schools" 
            :key="school.id"
            :to="'/schools/' + school.slug"
            class="school-card group bg-gray-50 p-8 hover:bg-white hover:shadow-2xl duration-300 rounded-sm"
          >
            <div class="w-16 h-16 bg-white flex items-center justify-center mb-12 shadow-sm rounded-sm group-hover:scale-110 transition-transform">
              <SchoolIcon class="text-kss-navy" size="32" />
            </div>
            <h3 class="school-card-title text-2xl font-black uppercase tracking-tight mb-4 font-fredoka">
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
              <h2 class="section-title-primary text-5xl font-black uppercase italic tracking-tighter leading-none font-fredoka">
                Direct Lead <br />
                <span class="section-title-accent italic font-fredoka">Generation</span>
              </h2>
              <p class="text-xl text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                Our inquiry system is built for speed. Get a quote for your school supplies within 24 hours.
              </p>
            </div>

            <div class="space-y-8">
              <div v-for="feature in features" :key="feature.title" class="flex gap-6">
                <div class="feature-icon-bg w-12 h-12 shrink-0 text-white flex items-center justify-center rounded-full">
                  <component :is="feature.icon" size="24" />
                </div>
                <div class="space-y-1">
                  <h4 class="feature-title text-lg font-black uppercase tracking-tight font-fredoka">{{ feature.title }}</h4>
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
  ArrowRight, School as SchoolIcon, 
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

<style scoped>
/* Hero Section Styles */
.hero-section {
  position: relative;
  min-height: 85vh;
  background: linear-gradient(135deg, #4fc3f7 0%, #81d4fa 50%, #b3e5fc 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 1rem;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 10;
}

@media (min-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    gap: 4rem;
  }
}

/* Student Images */
.hero-student {
  display: none;
}

@media (min-width: 768px) {
  .hero-student {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
}

.hero-student-img {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15));
}

@media (min-width: 1024px) {
  .hero-student-img {
    max-width: 350px;
  }
}

/* Hero Content */
.hero-content {
  text-align: center;
  z-index: 20;
  padding: 2rem 0;
}

/* Hero Title */
.hero-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 5rem;
  }
}

/* Hero Subtitle */
.hero-subtitle {
  font-family: 'Fredoka', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (min-width: 640px) {
  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (min-width: 1024px) {
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
    gap: 1.5rem;
  }
}

.hero-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

@media (min-width: 1024px) {
  .hero-btn {
    font-size: 1.1rem;
    padding: 1.2rem 3rem;
  }
}

.hero-btn-primary {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  color: white;
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
}

.hero-btn-secondary {
  background: linear-gradient(135deg, #ec407a 0%, #d81b60 100%);
  color: white;
}

.hero-btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(236, 64, 122, 0.4);
}

/* Decorative Elements */
.hero-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.hero-decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.hero-decoration-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%);
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.hero-decoration-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff4081 0%, #f50057 100%);
  top: 25%;
  right: 15%;
  animation-delay: 1s;
}

.hero-decoration-3 {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%);
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

.hero-decoration-4 {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff4081 0%, #f50057 100%);
  bottom: 30%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Section Heading Styles */
.section-title-primary {
  color: var(--kss-blue);
}

.section-title-accent {
  color: var(--kss-red);
}

/* School Card Styles */
.school-card {
  border-left-width: 8px;
  border-color: transparent;
  transition: all 0.3s;
}

.school-card:hover {
  border-color: var(--kss-yellow);
}

.school-card-title {
  color: var(--kss-blue);
  transition: color 0.3s;
}

.school-card:hover .school-card-title {
  color: var(--kss-red);
}

/* Feature Icon Styles */
.feature-icon-bg {
  background-color: var(--kss-blue);
}

.feature-title {
  color: var(--kss-blue);
}

/* Link Styles */
.link-primary {
  color: var(--kss-blue);
  transition: color 0.3s;
}

.link-primary:hover {
  color: var(--kss-red);
}
</style>
