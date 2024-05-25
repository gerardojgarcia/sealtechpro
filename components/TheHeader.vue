<script setup></script>
<template>
  <div>
    <header class="p-4 flex justify-evenly items-center">
      <img src="/" alt="SealTechPro" />

      <!-- Main Navigation -->
      <nav class="flex w-1/2 justify-evenly">
        <NuxtLink to="/" class="hover:text-blue-400">Home</NuxtLink>
        <NuxtLink to="/#services" class="hover:text-blue-400">Services</NuxtLink>
        <NuxtLink to="about" class="hover:text-blue-400">About</NuxtLink>
        <NuxtLink to="support" class="hover:text-blue-400">Contact</NuxtLink>
      </nav>
      <NuxtLink
        to="quote"
        class="hero-quote bg-blue-400 hover:bg-blue-200 hover:text-black p-2 rounded-md"
        >Get A Free Quote</NuxtLink
      >
    </header>
  </div>
</template>
