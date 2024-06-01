<script>
import { products } from '@/products';
import NotFoud from '../errors/404.vue'
export default{
  components:{
    NotFoud
  },
  data(){
    return{
      products
    }
  },
  computed :{
    dataproduct(){
      return this.products.find((p)=>{
        return p.id === this.$route.params.id
      })
    }
  },
  mounted(){
    console.log(this.dataproduct)
  }
}



</script>

<template>
  <div class="card-container mt-20 p-2 " v-if="dataproduct">
    <div class="card-content bg-[#151515] lg:w-80 xl:w-80 sm:w-96 md:w-96 mx-auto rounded-lg ">
      <div class="card-img lg:w-80 xl:w-80 sm:w-96 md:w-96 p-1 mx-auto">
        <img :src="dataproduct.imageUrl" alt="" class="rounded-lg">
      </div>
      <div class="card-title p-2">
        <h1 class="text-2xl font-bold text-green-800">{{ dataproduct.name }}</h1>
      </div>
      <div class="card-price p-2">
        <h1 class="text-white text-xl font-bold">Rp.{{ dataproduct.price }}</h1>
      </div>
      <div class="card-btn p-2">
          <button class="bg-green-800 p-2 w-full rounded-lg text-white">Add to cart</button>
      </div>
    </div>
    <div class="card-description p-2 mt-6">
        <div class="description  mx-auto text-justify">
          <p class="text-slate-300">{{ dataproduct.description }}</p>
        </div>
    </div>
  </div>
  <NotFoud v-else/>
</template>

<style scoped>

</style>