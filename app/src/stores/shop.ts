import axios, { type AxiosResponse } from 'axios';
import { defineStore } from 'pinia';

interface Type {
  name: string;
  url: string;
}
interface Category {
  name: string;
  url: string;
}
export interface Color {
  id: number;
  name: string;
  path: string;
  colorHex: string;
  colorPathName: string;
  availableSize: number[];
}
export interface Size {
  value: string;
  available: boolean;
}
export interface Product {
  url: string;
  name: string;
  brandLogoPath: string;
  sizes: string[];
  price: string;
  isNew: boolean;
  colors: Color[];
  productDetails: Size[];
}
export interface Types {
  [key: number]: Type;
}
export interface Categories {
  [key: number]: Category;
}
export interface Products {
  [key: string]: Product;
}

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    product: {} as Product,
    products: {} as Products,
    categories: {} as Category,
    types: {} as Type, 
  }),
  actions: {
    async fetchTypes(this: any) {
      if (Object.keys(this.types).length === 0) {
        try {
          const response: AxiosResponse<{ types: Type }> = await axios.get(`http://localhost:3000/shop/`);
          this.types = response.data.types;
        } catch (error) {
          console.error('Fehler beim Laden der Typen:', error);
          throw error;
        }
      }
    },
    async fetchCategories(this: any, type: string) {
      if (Object.keys(this.categories).length === 0) {
        try {
          const response: AxiosResponse<{ categories: Category }> = await axios.get(`http://localhost:3000/shop/${type}`);
          this.categories = response.data.categories;
        } catch (error) {
          console.error('Fehler beim Laden der Kategorien:', error);
          throw error;
        }
      }
    },
    async fetchProducts(this: any, type: string, category: string) {
      if (!this.products[`${type}_${category}`]) {
        try {
          const response: AxiosResponse<{ products: Products }> = await axios.get(`http://localhost:3000/shop/${type}/${category}`);
          this.products = response.data.products;
        } catch (error) {
          console.error('Fehler beim Laden der Produkte:', error);
          throw error;
        }
      }
    },
    async fetchProduct(this: any, type: string, category: string, name: string) {
      if (!this.product || !this.product[`${type}_${category}_${name}`]) {
        try {
          const response: AxiosResponse<Products> = await axios.get(`http://localhost:3000/shop/${type}/${category}/${name}`);
          this.product = response.data.product;
        } catch (error) {
          console.error('Fehler beim Laden des Produkts:', error);
          throw error;
        }
      }
    },
  },
});
