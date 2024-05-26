<script setup></script>

<template>
  <section id="process" class="dark:bg-dark_slate_gray pt-16 pb-24 overflow-hidden">
    <div class="process-container space-y-16">
      <h2 class="text-4xl text-center">Our Process</h2>
      <p class="text-center text-xl sm:px-2 md:w-1/2 m-auto">
        Our process is designed to be simple, convenient, and transparent. We take the
        hassle out of solar panel maintenance so you can enjoy the benefits of your system
        without the stress. Here's how it works:
      </p>
      <!-- Process Card -->
      <div
        class="process-card grid md:grid-cols-2 md:p-32 items-center space-y-6"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <div class="flex flex-col">
          <Icon name="ph:number-circle-one" class="text-[5rem]" />
          <strong class="text-2xl">Schedule at your convenience</strong>
          <p class="process-description md:w-1/2">
            Use our user-friendly online booking system to choose a date and time that
            works best for you. Just fill out a brief form with your details and the
            specifics of your solar panel system, and we'll handle the rest. Booking
            online is quick, easy, and available 24/7.
          </p>
        </div>
        <img
          src="/"
          height="500px"
          width="600px"
          class="rounded-lg"
        />
      </div>

      <!-- Process Card -->
      <div
        class="process-card flex flex-col-reverse md:grid md:grid-cols-2 md:p-32 items-center space-y-6"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
      >
        <img
          src="/"
          height="500px"
          width="600px"
          class="rounded-lg"
        />
        <div class="flex flex-col md:place-items-end">
          <div class="flex flex-col md:w-1/2">
            <Icon name="ph:number-circle-two" class="text-[5rem]" />
            <strong class="text-2xl">Expert Care On-Site</strong>
            <p class="process-description">
              Our professional team will visit your property to conduct a thorough
              assessment of your solar panel system. We'll identify any issues and perform
              necessary cleaning and maintenance tasks using the latest techniques and
              equipment. Our goal is to ensure your panels are operating at their peak
              efficiency.
            </p>
          </div>
        </div>
      </div>
      <!-- Process Card -->
      <div
        class="process-card grid md:grid-cols-2 md:p-32 items-center space-y-6"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="flex flex-col">
          <Icon name="ph:number-circle-three" class="text-[5rem]" />
          <strong class="text-2xl">Transparent and convenient Payment</strong>
          <p class="process-description md:w-1/2">
            Once the maintenance is complete, you'll receive an itemized bill detailing
            all services rendered. You can review and pay your bill online through our
            secure payment platform. It's straightforward, transparent, and hassle-free,
            so you can get back to enjoying the benefits of your solar energy system with
            minimal disruption..
          </p>
        </div>
        <img
          src="/"
          height="500px"
          width="600px"
          class="rounded-lg"
        />
      </div>
    </div>
  </section>
</template>
