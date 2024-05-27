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
          <strong class="text-2xl"> Easy Booking</strong>
          <p class="process-description md:w-1/2">
            Booking a concrete sealing service with SealTech Pro is simple and convenient. Whether you prefer to schedule online or over the phone, our user-friendly system ensures a hassle-free experience. Just provide us with some basic information about your project, and we’ll take care of the rest. Our customer service team is always available to assist you with any questions or special requests.
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
            <strong class="text-2xl"> Professional Onsite Service</strong>
            <p class="process-description">
              On the day of your service, our expert team will arrive promptly and ready to work. We prioritize clear communication, so you'll receive a confirmation call or message beforehand. Our team will explain the process, answer any questions, and ensure your property is protected during the sealing. We use state-of-the-art equipment and premium sealants to guarantee the best results, enhancing the appearance and durability of your concrete surfaces.
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
          <strong class="text-2xl"> Easy Payment and Feedback</strong>
          <p class="process-description md:w-1/2">
            We make the payment process smooth and straightforward. After completing the job, you can easily pay online, by phone, or in person. We value your feedback and encourage you to share your experience with us. Your satisfaction is our top priority, and we proudly offer a 10-year guarantee on all our work. Trust SealTech Pro for exceptional quality and peace of mind.
          </p>
        </div>
        <img
          src="/"
          height="500px"
          width="600px"
          class="rounded-lg"
        />

        <NuxtLink to="quote" class=" p-2 md:w-1/2  border-2 border-safety_orange rounded-md hover:bg-safety_orange text-white hover:text-black  duration-150">Get Started With SealTechPro</NuxtLink>
      </div>

      
    </div>
  </section>
</template>
