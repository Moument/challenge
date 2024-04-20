import axios from 'axios'
import { defineStore } from 'pinia'

export interface Types {
  name: string
  url: string
}
export interface Categories {
  name: string
  url: string
}
export interface Products {
  name: string
  url: string
  brandId: number
  price: string
  isNew: boolean
  colors: Array<Object>
}
export interface Product {
  name: string
  description: string
}

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    product: {} as Record<string, Product>,
    products: {} as Record<string, Products>,
    categories: {} as Record<string, Categories>,
    types: {} as Record<string, Types>,
    colors: {} as Record<string, Array<Object>>,
  }),
  actions: {
    async fetchTypes() {
      if (Object.keys(this.types).length === 0) {
        try {
          const response = await axios.get(`http://localhost:3000/shop/`)
          const data: Record<string, Categories> = await response.data.types
          this.types = data
        } catch (error) {
          console.error('Fehler beim Laden der Typen:', error)
          throw error
        }
      }
    },
    async fetchCategories(type: string) {
      if (Object.keys(this.categories).length === 0) {
        try {
          const response = await axios.get(`http://localhost:3000/shop/${type}`)
          const data: Record<string, Categories> = await response.data.categories
          this.categories = data
        } catch (error) {
          console.error('Fehler beim Laden der Kategorien:', error)
          throw error
        }
      }
    },
    async fetchProducts(type: string, category: string) {
      if (!this.products[`${type}_${category}`]) {
        try {
          const response = await axios.get(`http://localhost:3000/shop/${type}/${category}`)
          const data: Record<string, Products> = await response.data.products
          this.products = data
        } catch (error) {
          console.error('Fehler beim Laden der Produkte:', error)
          throw error
        }
      }
    },
    async fetchProduct(type: string, category: string, product: string) {
      if (!this.products[`${type}_${category}_${product}`]) {
        try {
          const response = await axios.get(
            `http://localhost:3000/shop/${type}/${category}/${product}`
          )
          const data: Product = await response.data
          this.product[`${type}_${category}_${product}`] = data
        } catch (error) {
          console.error('Fehler beim Laden des Produkts:', error)
          throw error
        }
      }
    }
  }
})
