<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HeroGlobal />
    <div class="page-content">
      <ProductCatalog />
    </div>
  </div>
</template>

<script lang="ts">
import HeroGlobal from '../components/HeroGlobal.vue'
import ProductCatalog from '../components/ProductCatalog.vue'

export default {
  components: {
    HeroGlobal,
    ProductCatalog
  }
}
</script>
