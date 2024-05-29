<script setup>

const faqs = ref([
{
    id: 1,
    question: "What is concrete sealing and why is it important?",
    answer: "Concrete sealing involves applying a protective layer to your concrete surfaces to prevent damage from weathering, staining, and wear. Sealing enhances durability, extends the lifespan of your concrete, and improves its appearance. It's an essential step in maintaining both residential and commercial concrete surfaces."
  },
  {
    id: 2,
    question: "How often should I seal my concrete?",
    answer: "The frequency of sealing depends on the type of sealer used and the amount of traffic the surface receives. Generally, it's recommended to reseal every 2-3 years for residential areas and annually for high-traffic commercial spaces. Our experts can provide specific recommendations based on your needs."
  },
  {
    id: 3,
    question: "What types of sealers do you use?",
    answer: "We use a variety of high-quality sealers, including acrylic, epoxy, polyurethane, penetrating, and water-based sealers. Each type offers different benefits, and we'll recommend the best option for your specific project."
  },
  {
    id: 4,
    question: "How long does the sealing process take?",
    answer: "The duration of the sealing process varies depending on the size of the area and the type of sealer used. Typically, residential projects can be completed in one day, while larger commercial projects may take several days. We'll provide a detailed timeline during your consultation."
  },
  {
    id: 5,
    question: "Can I schedule an appointment online?",
    answer: "Yes, scheduling an appointment is easy and convenient. You can book online through our website or give us a call. Our customer service team is always ready to assist you with the booking process."
  },
  {
    id: 6,
    question: "What should I do to prepare for the sealing service?",
    answer: "Before our team arrives, please clear the area of any furniture, vehicles, or other items. We'll handle all necessary surface preparation, including cleaning and repairing cracks and joints."
  },
  {
    id: 7,
    question: "Is there any maintenance required after sealing?",
    answer: "Yes, regular maintenance is important to keep your concrete surfaces in optimal condition. This includes periodic cleaning and resealing as needed. We offer maintenance and resealing services to ensure long-lasting protection."
  },
  {
    id: 8,
    question: "Do you offer a warranty on your services?",
    answer: "Absolutely. We stand by the quality of our work with a 10-year guarantee on all concrete sealing services. If you experience any issues, please contact us, and we'll make it right."
  },
  {
    id: 9,
    question: "How can I provide feedback on your services?",
    answer: "We value your feedback and encourage you to share your experience with us. You can provide feedback directly through our website, via email, or by giving us a call. Your input helps us continually improve our services."
  }
])

</script>
<template>
     <div class="dark:bg-black py-16 dark:text-white">
        <TheHeader/>
        <AppSubpageHero title="FAQs"/>

        <div class="p-4 md:p-32 dark:text-white space-y-8">
            <h1 class="text-5xl">FAQs</h1>
            <p class="intro text-2xl">Have questions about our solar panel maintenance services? We've got answers! Below you'll find the most frequently asked questions from our clients. If you don't find what you're looking for, feel free to contact us directly.</p>

            <div class="faq-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="faq" v-for="faq in faqs" :key="faq.id">
                    <h2 class="text-3xl">{{ faq.question }}</h2>
                    <p class="text-lg">{{faq.answer}}</p>
                </div>
             
        </div>

        <p class="conclusion md:mx-32 text-3xl font-bold mt-16">Don't see your question here? Our customer service team is ready to help. Contact us anytime for more information about SolarSustain's services and how we can help keep your solar panels performing at their best.</p>
</div>
        <TheFooter/>
    </div>
</template>