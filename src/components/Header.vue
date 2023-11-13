<template lang="">
  <div class="bg-white fixed z-10 w-full left-0 right-0">
    <div class="header relative flex justify-between items-center py-6 px-4">
      <div>
        <span class="text-4xl font-bold text-main-color"><a href="#">Muar.</a></span>
      </div>
      <div class="absolute right-0 left-0">
        <ul class="flex justify-center gap-8 font-medium">
          <li class="text-main-color font-bold"><a href="#">Home</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <img src="../assets/images/cart.png" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style>
.header {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
