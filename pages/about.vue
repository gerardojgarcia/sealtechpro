<script setup></script>
<template>
  <div>
    <TheHeader />
    <AppSubpageHero title="About Us" />
    <!-- Container for the whole page -->
    <div class="max-w-7xl mx-auto p-6 space-y-10">
      <!-- Heading -->
      <header class="text-center">
        <h1 class="text-4xl font-bold">About SealTechPro</h1>
      </header>

      <!-- Introduction -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          At SealTech Pro, our mission is to protect and enhance the durability of
          concrete surfaces for residential, commercial, and industrial clients. We are
          committed to delivering top-tier concrete sealing services with a focus on
          quality, reliability, and customer satisfaction.
        </p>
      </section>

      <!-- Our Story -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Who We Are</h2>
        <p>
          Based in San Bernardino County, California, SealTech Pro has built a reputation
          as a trusted partner in concrete sealing. Our team of experienced professionals
          utilizes state-of-the-art techniques and premium sealant products to ensure your
          concrete surfaces are well-protected against weathering, staining, and wear.
        </p>
      </section>

      <!-- Our Services -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Our Services</h2>

        <p class="mt-4">
          We specialize in a wide range of services, including surface preparation, crack
          and joint repair, various sealing options such as epoxy and polyurethane,
          anti-slip treatments, and decorative sealing. Whether it's driveways, patios,
          walkways, or large-scale commercial projects, we provide tailored solutions to
          meet your specific needs.
        </p>
      </section>

      <!-- Our Team -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Our Commitment to You</h2>
        <p>
          At SealTech Pro, we understand the importance of your concrete investments. We
          are dedicated to preserving and enhancing the value and longevity of your
          surfaces with professional service and exceptional quality. Trust us to deliver
          superior concrete protection solutions tailored to your needs.
        </p>
      </section>

      <!-- Why Choose Us -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>Expertise:</strong> Our team has years of experience in the concrete
            sealing industry, ensuring high-quality results.
          </li>
          <li>
            <strong>Customer Service:</strong>We prioritize clear communication and
            customer satisfaction, from initial consultation to project completion.
          </li>
          <li>
            <strong>Quality Products:</strong> We use only the best sealant products to
            ensure long-lasting protection and enhanced appearance.
          </li>
          <li>
            <strong> Warranty:</strong> We stand by our work with a 10-year guarantee on
            all our services, providing you with peace of mind.
          </li>
        </ul>
      </section>

      <!-- Join Us on Our Journey -->

      <!-- Contact Us -->
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Discover the SealTech Pro difference – where quality meets durability.</p>
      </section>
    </div>

    <NuxtLink
      to="quote"
      class="p-2 ml-16 md:w-1/2 border-2 border-safety_orange rounded-md hover:bg-safety_orange hover:text-white duration-150"
      >Contact Us to Learn More</NuxtLink
    >
    <TheFooter />
  </div>
</template>
