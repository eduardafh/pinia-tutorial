import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'tramontina', price: 79.9, qty: 100 },
    { id: 2, name: 'facasguinço', price: 79.9, qty: 100 },
    { id: 3, name: 'liquidificador', price: 79.9, qty: 100 },
    { id: 4, name: 'batedeira', price: 79.9, qty: 100 }
  ])

  return { products }
})
