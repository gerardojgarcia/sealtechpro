<script setup></script>
<template>
  <div class="hero grid place-items-center md:py-16 h-screen bg-dark_slate_gray">
    <div
      class="heading md:w-1/2 flex flex-col items-center bg-opacity-85 rounded-lg"
    >
      <h1 class="text-5xl text-center m-auto mb-8 md:px-12 dark:text-white">
        Shine Brighter with <strong class="text-yellow-400">Premium Solar Care</strong>
      </h1>
      <p class="subheading text-center text-2xl md:px-32 dark:text-white">
        Extend the life and efficiency of your solar investment with expert maintenance
        and real-time support
      </p>
    </div>
    <div
      class="button-container w-96 bg-opacity-85 px-4 rounded-lg justify-between py-4 mt-16 flex flex-col md:flex-row "
    >
      <NuxtLink
        to="quote"
        class="hero-quote hover:bg-concrete_gray bg-steel_blue hover:text-black p-2 rounded-md duration-150"
        >Get A Free Quote</NuxtLink
      >
      <NuxtLink
        to="#services"
        class="hero-quote p-2 border-2 border-safety_orange rounded-md hover:bg-safety_orange text-black  duration-150"
        >Explore Our Services</NuxtLink
      >
    </div>
  </div>
</template>
<style scoped>
.hero {
  background-image: url("/");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>
