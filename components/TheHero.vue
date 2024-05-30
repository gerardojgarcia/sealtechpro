<script setup></script>
<template>
  <div class="hero grid h-screen bg-dark_slate_gray">
    <div
      class="heading md:w-1/2 flex flex-col items-center justify-center bg-dark_slate_gray h-full bg-opacity-95"
    >
      <h1 class="text-5xl text-center mb-8 md:px-12 text-white">
        SealTech Pro: Premium Concrete Sealing for
        <strong class="text-yellow-400">Lasting Durability</strong>
      </h1>
      <p class="subheading text-center text-2xl md:px-32 text-white">
        Protecting and Enhancing Your Concrete Surfaces with Expert Precision and
        Top-Quality Sealants
      </p>
      <div
        class="button-container w-96 bg-opacity-85 px-4 rounded-lg justify-between py-4 mt-16 flex flex-col md:flex-row"
      >
        <NuxtLink
          to="quote"
          class="hero-quote hover:bg-concrete_gray bg-steel_blue hover:text-black p-2 rounded-md duration-150"
          >Get A Free Quote</NuxtLink
        >
        <NuxtLink
          to="#services"
          class="hero-quote p-2 border-2 border-safety_orange rounded-md hover:bg-safety_orange text-white hover:text-black duration-150"
          >Explore Our Services</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero {
  background-image: url("/sealteach_hero.webp");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
}
</style>
