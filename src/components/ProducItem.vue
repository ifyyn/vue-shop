<template>
  <div class="card-content bg-[#151515] shadow-lg lg:w-80 xl:w-80 sm:w-96 md:w-96 mx-auto rounded-lg ">
      <div class="card-img lg:w-80 xl:w-80 sm:w-96 md:w-96 p-10 mx-auto">
        <img :src="products.imageUrl" alt="" class="rounded-lg">
      </div>
      <div class="card-title p-2 text-center">
        <h1 class="text-2xl font-bold text-green-800">{{ products.name }}</h1>
      </div>
      <div class="card-price p-2 text-center">
        <h1 class="text-white text-xl font-bold">Rp.{{ products.price }}</h1>
      </div>
      <div class="card-btn p-2">
        <RouterLink :to="{name: 'productdetail',params:{id : products.id}}">
          <button class="bg-green-800 p-2 w-full rounded-lg text-white">lihat detail</button>
        </RouterLink>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const {products} = defineProps(['products'])
</script>

<style>

</style>