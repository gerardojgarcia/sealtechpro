<script setup></script>

<template>
  <section
    id="services"
    class="grid md:grid-cols-2 place-items-center dark:text-white dark:bg-black"
  >
    <div class="grid place-items-center rounded-lg" data-aos="fade-right">
      <img
        src="/"
        alt="Image of men doig maintenance on solar panels"
        class="rounded-lg p-4 md:p-32"
        height="600px"
      />
    </div>
    <div class="p-8" data-aos="fade-left">
      <h2 class="text-4xl mb-6">Comprehensive Solar Panel Services</h2>
      <p class="text-2xl">
        Keep your solar panels performing at their peak with SolarSustain's expert
        cleaning and maintenance services. Whether you're looking for a one-time clean or
        ongoing care, we have flexible options tailored to your needs.
      </p>
      <div class="mt-8">
        <strong class="text-2xl">One-Time Cleaning Services</strong>
        <p class="p-8">
          Our one-time cleaning service is perfect for those looking for immediate
          maintenance or a quick enhancement of their system's efficiency. Our pricing is
          structured based on the number of panels, ensuring a cost-effective solution for
          every size of installation.
        </p>
        <strong class="text-2xl">Subscription-Based Cleaning (Bi-Annual):</strong>
        <p class="p-8">
          Our one-time cleaning service is perfect for those looking for immediate
          maintenance or a quick enhancement of their system's efficiency. Our pricing is
          structured based on the number of panels, ensuring a cost-effective solution for
          every size of installation.
        </p>
        <strong class="text-2xl">Our Promise</strong>
        <p class="p-8">
          For those committed to long-term efficiency, our subscription-based cleaning
          service offers a convenient and cost-effective solution. Subscribe to our
          bi-annual plan and receive a 10% discount on the total cost. This plan ensures
          your solar panels are maintained regularly, which is key to maximizing energy
          output and extending the lifespan of your system.
        </p>
      </div>
      <div class="button-container justify-between py-8 flex md:w-3/4">
        <NuxtLink
          to="quote"
          class="hero-quote bg-blue-400 p-2 rounded-md hover:bg-blue-300 dark:text-white hover:text-black duration-150"
          >Book Your Cleaning Today</NuxtLink
        >
        <NuxtLink
          to="quote"
          class="hero-quote p-2 border-2 border-gray-400 rounded-md hover:bg-yellow-300 hover:text-black hover:border-yellow-300 duration-150"
        >
          Subscribe & Save
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
