import { defineStore } from 'pinia'
import { db, initializeDb } from '../db'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    schools: [],
    products: [],
    loading: false,
    lastUpdated: null
  }),

  actions: {
    async init() {
      this.loading = true
      await initializeDb()
      await this.loadFromLocal()
      this.loading = false
      
      // In a real app, we would trigger a background revalidate here
      // this.revalidate()
    },

    async loadFromLocal() {
      this.schools = await db.schools.toArray()
      this.products = await db.products.toArray()
    },

    async getSchoolBySlug(slug) {
      return await db.schools.where('slug').equals(slug).first()
    },

    async getProductsBySchool(schoolId) {
      return await db.products.where('schoolId').equals(schoolId).toArray()
    },

    // Stale-While-Revalidate pattern placeholder
    async revalidate() {
      try {
        // Fetch from API
        // const response = await fetch('/.netlify/functions/catalog')
        // const data = await response.json()
        
        // Update local DB
        // await db.schools.bulkPut(data.schools)
        // await db.products.bulkPut(data.products)
        
        // Refresh state
        // await this.loadFromLocal()
      } catch (error) {
        console.error('Failed to revalidate catalog:', error)
      }
    }
  }
})
