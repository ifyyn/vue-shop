<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="navbar justify-between px-5">
        <li class="left">
            <RouterLink active-class="active" class="font-bold text-white text-2xl" :to="{name : 'product'}"><span class="text-green-800">Vue</span>.Store</RouterLink>
        </li>
        <li class="cart bg-green-800 rounded-full w-8 h-8 p-1 text-center  hover:bg-slate-300">
            <RouterLink active-class="active" class="text-white" :to="{name : 'cart'}">C</RouterLink>
        </li>
    </div>
</template>

<style scoped>
    .navbar{
        display: flex;
    }
    .navbar .nav-brand{
        color: white;
        font-weight: bold;
    }
    .navbar .active{
        color: white;
    }
    .cart:hover a{
        color: #151515;
    }
    li{
        list-style: none;
    }
</style>