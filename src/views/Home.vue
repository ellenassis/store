<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HeroGlobal />
    <ShoppingBag />
    <div class="page-content">
      <ProductCatalog />
    </div>
  </div>
</template>

<script lang="ts">
import HeroGlobal from '../components/HeroGlobal.vue'
import ShoppingBag from '../components/ShoppingBag.vue'
import ProductCatalog from '../components/ProductCatalog.vue'

export default {
  components: {
    HeroGlobal,
    ShoppingBag,
    ProductCatalog
  }
}
</script>
