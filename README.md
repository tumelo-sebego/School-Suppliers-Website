# Katlehong School Suppliers (KSS)

An authoritative, Industrial-Corporate brochure website for school uniforms and educational supplies. Built with Vue 3, Vite, and Tailwind CSS, featuring a local-first architecture using Dexie.js for instant performance.

## 🚀 Vision & Design
- **Industrial-Corporate Aesthetic**: Established and authoritative design using Navy (#003366) and Safety Yellow (#FFCC00).
- **Two-tier Layout**: White utility bar + Sticky Navy brand bar.
- **Local-First**: Powered by IndexedDB (Dexie) with Stale-While-Revalidate data fetching.
- **Lead Generation**: Robust inquiry system with floating WhatsApp and Direct Call links.

## 🛠️ Tech Stack
- **Frontend**: Vue.js 3 (Composition API)
- **Tooling**: Vite, Tailwind CSS
- **Data Layer**: Dexie.js (IndexedDB)
- **Backend Ready**: Configured for Netlify Functions & MongoDB Atlas

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Katlehong-School-Suppliers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start local development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `/src/components`: UI components (Header, Footer, Inquiry Form, etc.)
- `/src/views`: Main pages (Home, Catalog, Price List)
- `/src/store`: Pinia state management (Catalog data)
- `/src/db.js`: Dexie database configuration
- `/netlify/functions`: Backend serverless functions (Skeleton ready)
