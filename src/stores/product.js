import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'boi', price: 79.9, qty: 100 },
    { id: 2, name: 'frango', price: 79.9, qty: 100 },
    { id: 3, name: 'vaca', price: 79.9, qty: 100 },
    { id: 4, name: 'galinha', price: 79.9, qty: 100 }
  ])
  // const lastId = ref(4)

  function deleteProductById(id){
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  function getProductById(id){
    return products.value.find((product) => product.id == id)
  }

  return { products, getProductById, deleteProductById }
})
