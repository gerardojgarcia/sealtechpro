<script setup>
 const terms = ref([
 {
    id: 1,
    title: "Introduction",
    description: "Welcome to SealTech Pro. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with these terms. Please read them carefully."
  },
  {
    id: 2,
    title: "Services",
    description: "SealTech Pro provides concrete sealing services, including surface preparation, crack and joint repair, various sealing options, anti-slip treatments, and maintenance. We aim to deliver high-quality results and exceptional customer service."
  },
  {
    id: 3,
    title: "Booking and Payment",
    description: "All bookings can be made through our website or by phone. Payment is due upon completion of services, unless otherwise agreed. We accept various payment methods for your convenience. A detailed invoice will be provided after the completion of the job."
  },
  {
    id: 4,
    title: "Warranty",
    description: "SealTech Pro offers a 1-year warranty on any defects related to the installation of our concrete sealing services. This warranty covers issues directly resulting from our installation process. It does not cover general wear and tear, misuse, or damage caused by external factors such as extreme weather conditions or accidents."
  },
  {
    id: 5,
    title: "Cancellation and Rescheduling",
    description: "If you need to cancel or reschedule your appointment, please notify us at least 48 hours in advance. Cancellations made less than 48 hours before the scheduled service may be subject to a cancellation fee."
  },
  {
    id: 6,
    title: "Limitation of Liability",
    description: "SealTech Pro is not liable for any indirect, incidental, or consequential damages resulting from the use of our services. Our total liability for any claim related to our services shall not exceed the amount paid for those services."
  },
  {
    id: 7,
    title: "User Responsibilities",
    description: "You are responsible for ensuring that the area to be sealed is free of obstructions. This includes removing furniture, vehicles, and other items from the work area. Failure to do so may result in delays or additional charges."
  },
  {
    id: 8,
    title: "Privacy Policy",
    description: "Your privacy is important to us. SealTech Pro collects and uses personal information in accordance with our Privacy Policy, which is available on our website. By using our services, you consent to such collection and use."
  },
  {
    id: 9,
    title: "Changes to Terms and Conditions",
    description: "SealTech Pro reserves the right to modify these Terms and Conditions at any time. Changes will be posted on our website, and your continued use of our services constitutes acceptance of the revised terms."
  },
  {
    id: 10,
    title: "Governing Law",
    description: "These Terms and Conditions are governed by and construed in accordance with the laws of the state in which SealTech Pro operates. Any disputes arising from these terms shall be resolved in the courts of that state."
  }
 ])


</script>
<template>
    <div class="dark:bg-black py-16 dark:text-white">
        <TheHeader/>
        <AppSubpageHero title="Terms & Conditions"/>

        <div class="p-4 md:p-32 dark:text-white">
            <h1 class="text-5xl mb-10">Terms & Conditions</h1>

            <div class="grid grid-cols-2 space-y-4">
                <div class="mx-16 " v-for="term in terms" :key="term.id">
                <strong class="text-3xl">{{ term.title}}</strong>
                <p>{{ term.description }}</p>
                </div>
            </div>

            


        </div>

        <TheFooter/>
    </div>
</template>
<style scoped>

strong {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.terms-box {
    max-width: 65rem;
}

.terms-box p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

</style>