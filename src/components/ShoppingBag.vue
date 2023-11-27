<template lang="">
  <transition name="fade">
    <div v-show="show" class="cart-container">
    <div class="cart-products" v-for="(product, index) in productsInBag" :key="index">
      <div>
        <img :src="product.image" class="" />
      </div>
      <h3 class="text-sm font-bold mt-2 h-12">{{ product.title }}</h3>
      <p class="font-bold text-xl">${{ product.price }}</p>
    </div>
    <div v-if="!productsInBag.length" class="flex items-center justify-center h-full">
      <div class="text-center">
        <h4 class="font-bold text-lg">Sua sacola ainda está vazia</h4>
        <p>Comece adicionando um produto</p>
    </div>
    </div>
    <button @click="closeCart" class="absolute top-4 right-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="-0.5 0 25 25"
        fill="none"
      >
        <path
          d="M3 21.32L21 3.32001"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 3.32001L21 21.32"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  </transition>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useProducts } from '../stores/products'

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props, {emit}) {
    const store = useProducts()
    const productsInBag = computed(() => store.productsInBag)

    const closeCart = ()=> {
      emit('close');
    }

    return {
      productsInBag,
      closeCart
    }

    
  }
}
</script>
<style>
.cart-container {
  background: #fff;
  position: fixed;
  height: 100vh;
  width: 20%;
  top: 0;
  right: 0;
  z-index: 9999;
  padding: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
