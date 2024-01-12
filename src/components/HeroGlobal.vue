<template lang="">
  <div class="bg-hero pt-40 px-10">
    <div
      class="relative page-content hero flex flex-col justify-between items-center gap-8 lg:flex-row pt-4"
    >
      <div class="text-center lg:text-start">
        <h1 class="mb-6 uppercase">Fashion for lifestyle.</h1>
        <p>Shop Now and Save Big with 60% Off!</p>
      </div>
      <div>
        <img class="hero-img" src="../assets/images/woman-hero.png" alt="" />
      </div>
    </div>
  </div>
</template>
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
.hero-img {
  width: 65%;
  position: absolute;
  bottom: 0;
  right: 0;
}

@media screen and (max-width: 400px) {
  .hero {
   min-height: 60vh;
 } 
  .hero-img {
   min-width: 320px;
  }
}

@media screen and (max-width: 768px) {
 .hero-img {
   width: 100%;
  }
}

@media screen and (max-width: 1030px) {
  .hero-img {
   left: 50%;
   transform: translateX(-50%);
  }
}
</style>
