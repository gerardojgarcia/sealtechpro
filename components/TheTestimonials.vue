<script setup>
const testimonials = [
  {
    id: 1,
    quote:
      "I couldn't be happier with the work SealTech Pro did on my driveway. The team was professional, efficient, and the results are outstanding. My driveway looks brand new and is well-protected against the elements. Highly recommend!",
    name: "Jose S.",
    location: "San Bernardino",
    image: "/",
  },
  {
    id: 2,
    quote:
      "SealTech Pro transformed my patio with their sealing services. The quality of their work is exceptional, and they were very communicative throughout the process. My patio has never looked better!",
    name: "Maria R.",
    location: "Fontana, CA",
    image: "/",
  },
  {
    id: 3,
    quote:
      "We hired SealTech Pro for our commercial property, and they exceeded our expectations. The team was prompt, professional, and the sealing has significantly improved the appearance and durability of our concrete surfaces.",
    name: "David L",
    location: "Ontario, CA",
    image: "/",
  },
  {
    id: 4,
    quote:
      "From start to finish, SealTech Pro provided excellent service. The booking process was easy, the team was on time, and they did a fantastic job sealing our walkways. I'll definitely use them again for future projects.",
    name: "Lisa M.",
    location: "Rancho Cucamonga, CA",
    image: "/",
  },
  {
    id: 5,
    quote:
      "SealTech Pro did an amazing job on our pool deck. The anti-slip treatment they applied has made it much safer, and the sealing has enhanced the overall look. Their attention to detail is impressive.",
    name: "Derrick H.",
    location: "Chino, CA",
    image: "/",
  },
  {
    id: 6,
    quote:
      "I'm thrilled with the results from SealTech Pro. They repaired the cracks in my driveway and applied a high-quality sealer that looks great. The entire process was smooth, and their customer service was top-notch.",
    name: "Emily T.",
    location: "Redlands, CA",
    image: "/",
  },
];
</script>
<template>
  <div class="py-24 dark:bg-dark_slate_gray flex flex-col items-center justify-center">
    <h4 class="text-5xl mb-16 px-4 md:w-[35vw] self-center">
      See what people are <span class="text-steel_blue">saying</span> about our service
    </h4>
    <div class="testimonial-container grid md:grid-cols-3 gap-4 md:mx-44 mx-4">
      <div
        class="testimonial-card p-6 border-2 hover:border-concrete_gray duration-200 ease-in border-steel_blue rounded-lg hover:shadow-lg"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <p class="quote text-lg">"{{ testimonial.quote }}"</p>
        <div class="person flex flex-col md:flex-row items-center mt-4">
          <!-- <img :src="testimonial.image" class="mr-6 " width="50px" alt="image of person">-->
          <div>
            <p class="name font-bold text-lg">{{ testimonial.name }}</p>
            <p class="location text-gray-500 dark:text-gray-300">
              {{ testimonial.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
