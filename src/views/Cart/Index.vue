<template>
  <div class="cart-container mx-auto xl:w-[980px] sm:w-[600px] ml-6 mt-20">
    <div class="cart-title">
      <h1 class="text-3xl font-bold text-white">Shopping Cart</h1>
    </div>
    <ItemCart v-for="item in cartItems" :key="item" :item="item"/>
    <div class="cart-value mt-10 absolute xl:right-10 ">
      <div class="cart total">
        <h1 class="text-white text-xl font-bold">Total: Rp.{{ totalPrice }}.00</h1>
      </div>
      <div class="cart-chackout mb-10">
        <button class="chacout bg-green-800 px-6 py-1 text-white">chackout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { cartItems } from '@/products';
import ItemCart from '@/components/ItemCart.vue';
export default {
 components:{
  ItemCart
 },
  data(){
    return{
      cartItems
    }
  },
  computed:{
    totalPrice(){
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }
  }
}
</script>

<style>

</style>