<template lang="">
  <div class="cart-container">
    <div class="cart-products" v-for="(product, index) in productsInBag" :key="index">
      <div>
        <img :src="product.image" class="" />
      </div>
      <h3 class="text-sm font-bold mt-2 h-12">{{ product.title }}</h3>
      <p class="font-bold text-xl">${{ product.price }}</p>
    </div>
    <div v-if="!productsInBag.length">
      <h5>Sua sacola ainda está vazia</h5>
      <p>Comece adicionando um produto</p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useProducts } from '../stores/products'

export default {
  setup() {
    const store = useProducts()
    const productsInBag = computed(() => store.productsInBag)

	return {
		productsInBag
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
</style>
