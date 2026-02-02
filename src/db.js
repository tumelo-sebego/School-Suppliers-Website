import Dexie from 'dexie'

export const db = new Dexie('KssDatabase')

db.version(1).stores({
  schools: '++id, name, slug',
  products: '++id, name, category, schoolId',
  catalogs: '++id, schoolId, pdfUrl'
})

// Initialize with some mock data if empty
export async function initializeDb() {
  const schoolCount = await db.schools.count()
  if (schoolCount === 0) {
    await db.schools.bulkAdd([
      { name: 'Katlehong Secondary', slug: 'katlehong-secondary' },
      { name: 'Kwanele Primary', slug: 'kwanele-primary' },
      { name: 'Phaswane High', slug: 'phaswane-high' },
      { name: 'Sijabulile Secondary', slug: 'sijabulile-secondary' }
    ])

    await db.products.bulkAdd([
      { name: 'School Blazer (Navy)', category: 'Uniform', schoolId: 1, price: 450 },
      { name: 'White Shirt (Long Sleeve)', category: 'Uniform', schoolId: 1, price: 120 },
      { name: 'School Tie', category: 'Accessories', schoolId: 1, price: 65 },
      { name: 'Grey Trousers', category: 'Uniform', schoolId: 1, price: 180 }
    ])
  }
}
