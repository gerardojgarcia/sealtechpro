<script setup></script>
<template>
  <section
    id="about"
    class="grid md:grid-cols-2 dark:text-white dark:bg-dark_slate_gray place-items-center overflow-hidden"
  >
    <div class="p-8" data-aos="fade-right">
      <h2 class="text-5xl mb-6">Excellence in Concrete Sealing</h2>
      <p class="text-2xl md:w-3/4 mb-4">Your Concrete, Our Commitment</p>
      <p class="text-lg">
        At SealTech Pro, we specialize in protecting and enhancing the durability of
        concrete surfaces. With our expert team and top-quality sealants, we ensure your
        driveways, patios, walkways, and commercial projects stand the test of time.
      </p>

      <div
        class="button-container justify-between py-8 flex flex-col md:flex-row md:w-3/4"
      >
        <NuxtLink
          to="/#services"
          class="hero-quote border-safety_orange border-2 hover:bg-blue-200 p-2 rounded-md hover:bg-safety_orange hover:text-white duration-150"
          >Learn More About Us
        </NuxtLink>
      </div>
    </div>
    <div class="grid place-items-center md:p-32" data-aos="fade-left">
      <img
        src="/sealtech_1.webp"
        alt="Image of men sealing a concrete driveway in a residential neighborhood"
        class="rounded-md"
        height="600px"
      />
    </div>
  </section>
</template>
