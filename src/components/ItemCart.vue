<template>
  <div class="cart-wrap flex mt-10">
      <div class="cart-img w-32">
        <img :src="item.imageUrl" alt="" class="w-full">
      </div>
        <div class="content p-2">
          <div class="cart-name">
          <h1 class="text-xl text-green-800 font-bold">{{ item.name }}</h1>
        </div>
        <div class="cart-price mt-4">
          <h1 class="text-white font-bold">Rp.{{ item.price }}</h1>
        </div>
        <div class="cart-remove relative -bottom-5">
          <button class="bg-green-800 px-6 py-1 rounded-sm text-white">Remove</button>
        </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const {item} = defineProps(['item'])
</script>

<style>

</style>