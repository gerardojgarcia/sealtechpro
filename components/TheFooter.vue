<script setup>
const subscribe = ref(false);
</script>
<template>
  <footer id="footer dark:bg-dark_slate_gray dark:text-white py-16">
    <div
      class="mx-auto py-16 px-4 flex flex-col md:flex-row justify-between dark:bg-black"
    >
      <!-- Community Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Community</span>
        <NuxtLink
          to="blog/why-hire-professional-solar-panel-cleaners"
          class="hover:underline hover:text-blue-400"
          >Blog</NuxtLink
        >
        <NuxtLink href="#" class="hover:underline hover:text-blue-400"
          >SolarSustain on Youtube</NuxtLink
        >
        <NuxtLink href="#" class="hover:underline hover:text-blue-400"
          >Start a Franchise</NuxtLink
        >
      </div>

      <!-- Enterprise Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Enterprise</span>
        <NuxtLink href="/support" class="hover:underline hover:text-blue-400"
          >Support</NuxtLink
        >
        <NuxtLink href="/faqs" class="hover:underline hover:text-blue-400">FAQS</NuxtLink>
        <NuxtLink href="/jobs" class="hover:underline hover:text-blue-400">Jobs</NuxtLink>
        <NuxtLink href="/terms" class="hover:underline hover:text-blue-400"
          >Terms&Conditions</NuxtLink
        >
      </div>

      <!-- Solutions Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Solutions</span>
        <NuxtLink href="#" class="hover:underline hover:text-blue-400"
          >Residential Services</NuxtLink
        >
        <NuxtLink href="#" class="hover:underline hover:text-blue-400"
          >Commercial Services</NuxtLink
        >
        <NuxtLink href="#" class="hover:underline hover:text-blue-400"
          >Industrial Services</NuxtLink
        >
      </div>

      <!-- Newsletter Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Subscribe to our newsletter</span>
        <p>Stay updated on new releases and features, guides, and community updates.</p>
        <form class="flex mt-2">
          <input
            type="email"
            placeholder="you@domain.com"
            class="p-2 rounded-l-md ring-2 ring-blue-400 focus:outline-none focus:ring-2 dark:text-black focus:ring-blue-300 flex-grow"
          />
          <button
            @click.prevent="subscribe = !subscribe"
            class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
        <div>
          <p v-if="subscribe" class="mt-4 text-xl text-blue-200">
            Thanks, we'll be in touch!
          </p>
          <p v-else></p>
        </div>
      </div>
    </div>
  </footer>
</template>
