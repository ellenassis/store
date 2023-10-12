<template lang="">
  <div class="flex justify-between items-center py-10 relative">
    <div>
      <span class="text-4xl font-bold text-main-color"><a href="#">Muar.</a></span>
    </div>
    <div class="absolute left-0 right-0">
      <ul class="flex justify-center gap-8 font-medium">
        <li class="text-main-color font-bold"><a href="#">Home</a></li>
        <li><a href="#">Store</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div>
      <img src='../assets/images/cart.png' class='cursor-pointer' />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang=""></style>
