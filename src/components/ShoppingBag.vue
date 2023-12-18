<template lang="">
  <transition name="fade">
    <div v-show="show" class="cart-container">
      <h3 class="font-bold">Resumo da sacola</h3>
      <div class="cart-products-container" v-if="productsInBag.length">
        <div class="cart-products my-8 relative" v-for="(product, index) in productsInBag" :key="index">
          <div>
            <img :src="product.image" class="max-w-[5rem]" />
          </div>
          <div>
            <h3 class="text-sm font-bold mt-2 h-12">{{ product.title }}</h3>
            <p class="font-bold text-xl">${{ product.price }}</p>
          </div>
          <button class="absolute right-4 bottom-4" @click="deleteProduct(product.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
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
      <div class="resume-bag">
        <div class="mt-4 flex justify-between items-center text-xl font-bold">
          <p>Total</p>
          <p>$ {{totalInBag}}</p>
        </div>
        <button>Fechar pedido</button>
      </div>
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
  setup(props, { emit }) {
    const store = useProducts()
    const productsInBag = computed(() => store.productsInBag)
    const totalInBag = computed(() => store.totalInBag.toFixed(2))

    const closeCart = () => {
      emit('close')
    }

    const deleteProduct = (productId: Number) => {
      store.productsInBag = store.productsInBag.filter(products => {
        return products.id !== productId;
      })
    }

    return {
      productsInBag,
      closeCart,
      deleteProduct,
      totalInBag
    }
  }
}
</script>
<style>
.cart-container {
  background: #fff;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 9999;
  padding: 1rem;
}
.cart-products {
  display: flex;
  gap: 1rem;
  align-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(225, 223, 223);
}
.cart-products-container {
  overflow: auto;
  height: 80%;
}
.cart-products-container::-webkit-scrollbar {
  width: 5px;
}
.cart-products-container::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 10px;
}
.cart-products-container::-webkit-scrollbar-track {
  margin: 2rem 0 ;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 450px) {
  .cart-container {
    width: 400px;
  }
}

.resume-bag button {
  background: #F06C9B;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  width: 100%;
  height: 50px;
  margin-top: 2rem;
}
</style>
