import axios from 'axios'
import { reactive, readonly } from 'vue'

interface Product {
  id: number
  name: string
  price: number
}

const productStore = reactive({
  products: [] as Product[],
  loading: false,
  error: null as string | null
})

const fetchProducts = async () => {
  try {
    productStore.loading = true
    const response = await axios.get('http://localhost:3000/api/product/clothing/shirts')
    productStore.products = response.data
  } catch (error) {
    productStore.error = 'Fehler beim Laden der Produkte'
    console.error('Fehler beim Laden der Produkte:', error)
  } finally {
    productStore.loading = false
  }
}

export default {
  productStore: readonly(productStore),
  fetchProducts
}
