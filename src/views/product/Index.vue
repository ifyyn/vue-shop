<script setup>
import { products } from '@/products';
import { ref,watch } from 'vue';
import ProductItem from '../../components/ProducItem.vue'
const product = ref(products)
const search = ref("")

watch(search,()=>{
  product.value = products.filter((products)=>{
    return products.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

</script>

<template>
  <div class="container mt-20">
    <div class="input mx-auto lg:w-80 xl:w-80 sm:w-96 md:w-96 xl:ml-12 px-5 lg:px-0 xl:px-0">
    <input v-model="search" type="text" class="p-2 bg-[#151515] text-white" placeholder="search">
  </div>
  <div class="card-container grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto p-5 gap-14">
    <ProductItem v-for="products in product" :key="products" :products="products"/>
  </div>
  </div>
</template>

<style>

</style>