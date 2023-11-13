<template lang="">
  <div class="bg-hero pt-10 px-10">
    <div
      class="relative page-content hero flex flex-col justify-between items-center gap-8 lg:flex-row"
    >
      <div class="text-center lg:text-start">
        <h1 class="mb-6 uppercase">Fashion for lifestyle.</h1>
        <p>Shop Now and Save Big with 60% Off!</p>
      </div>
      <div>
        <img class="absolute bottom-0 right-0 w-3/5" src="../assets/images/woman-hero.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hero'
}
</script>
<style>
.hero {
  min-height: 70vh;
}
.bg-hero {
  background-image: url('../assets/images/bg-hero.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}
</style>
