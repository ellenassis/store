<template lang="">
  <ShoppingBag :show="showCart" @close="closeCart" />
  <div class="mt-12">
    <div class="product mt-6">
      <div v-for="(product, index) in products" :key="index" class="w-full text-center">
        <div>
          <div
            class="product-card relative py-4"
            @mouseover="showInfo(index)"
            @mouseout="hideInfo(index)"
            :class="active === index ? 'product-card--active' : ''"
          >
            <img :src="product.image" class="h-48 w-full object-contain mt-8 mb-4" />
            <button v-show="active === index" class="btn-buy" @click="addProduct(product)">
              Add
            </button>
          </div>
          <h3 class="text-sm font-bold mt-2 h-12">{{ product.title }}</h3>
          <p class="font-bold text-xl">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, computed, ref } from 'vue'
import ShoppingBag from './ShoppingBag.vue'
import { useProducts } from '../stores/products'

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default {
  components: {
    ShoppingBag,
  },
  setup() {
    const store = useProducts()

    const products = computed(() => {
      return store.products
    })
    onMounted(() => {
      store.fetchProducts()
    })

    const showCart = ref(false);

    const openCart = () => {
      showCart.value = true;
    }

    const closeCart = () => {
      showCart.value = false;
    }

    const active = ref<Number | null>(null)

  
    return {
      products,
      active,
      showInfo: (index: number) => {
        active.value = index
      },
      hideInfo: () => {
        active.value = null
      },
      addProduct: (product: Product) => {
        store.addProductInBag(product);
        openCart();
      },
      showCart,
      openCart,
      closeCart
    }
  },
  }
</script>
<style>
.product {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-content: space-between;
}
.product-card {
  height: 310px;
  border: 2px solid rgb(238, 238, 238);
  cursor: pointer;
}
.product-card--active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.btn-buy {
  background: #f06c9b;
  width: 100px;
  margin: 0 auto;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  color: #ffff;
  font-weight: 700;
  position: relative;
  z-index: 1;
}
</style>
