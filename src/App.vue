<script setup lang="ts">
import FooterGlobal from './components/FooterGlobal.vue';
import HeaderGlobal from './components/HeaderGlobal.vue';
</script>

<template class="app">
  <HeaderGlobal />
  <router-view />
  <FooterGlobal />
</template>