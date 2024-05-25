<script setup>

const testimonials = [
    {
        id: 1,
        quote: "SolarSustain not only cleaned our panels but also improved our system's output significantly. We appreciated their detailed inspection reports and professional service. Highly recommend to anyone looking to maximize their solar investment!",
        name: "Jonathan Meyers",
        location: "Redlands, CA",
        image: "/"
    },
    {
        id: 2,
        quote: "After signing up for the bi-annual maintenance plan, I've noticed a steady improvement in performance, and my energy bills have dropped. SolarSustain's team is knowledgeable and very thorough. Great value for the peace of mind they provide.",
        name: "Alicia Ramirez",
        location: "Victorville, CA",
        image: "/"
    },
    {
        id: 3,
        quote: "The team at SolarSustain was fantastic! They were on time, efficient, and left our panels looking like new. The light meter ratings helped us understand how much more efficiently our system is running. A++ service!",
        name: "Michael Chen",
        location: "Ontario, CA",
        image: "/"
    },
    {
        id: 4,
        quote: "I was impressed with the professionalism of the SolarSustain crew. They handled our large array of panels with ease and were extremely thorough in their work. It’s refreshing to work with a company that stands by their promise of quality.",
        name: "Emily Ford",
        location: "Chino Hills, CA",
        image: "/"
    },
    {
        id: 5,
        quote: "Choosing SolarSustain was one of the best decisions for our home. The difference in our solar panel efficiency before and after their cleaning and maintenance is remarkable. The subscription plan is affordable and keeps everything running perfectly.",
        name: "Derrick Lowe",
        location: "Hesperia, CA",
        image: "/"
    }
]


</script>
<template>
    <div class="py-24  dark:bg-black  flex flex-col items-center justify-center">
        <h4 class="text-5xl mb-16 px-4 md:w-[35vw] self-center">We're making everyday <span class="text-yellow-400">brighter</span> for our customers</h4>
        <div class="testimonial-container grid md:grid-cols-3 gap-4 md:mx-44 mx-4">


            <div class="testimonial-card p-6 border-2 dark:hover:border-blue-200 hover:border-blue-600 duration-200 ease-in border-blue-400 rounded-lg dark:bg-gray-900 hover:shadow-lg" v-for="testimonial in testimonials" :key="testimonial.id">


                <p class="quote text-lg">"{{testimonial.quote}}"</p>
                <div class="person flex flex-col md:flex-row items-center  mt-4">

                   <!-- <img :src="testimonial.image" class="mr-6 " width="50px" alt="image of person">-->
                    <div>
                        <p class="name font-bold text-lg">{{ testimonial.name }}</p>
                        <p class="location text-gray-500 dark:text-gray-300">{{ testimonial.location }}</p>
                    </div>


                </div>



            </div>
        </div>
    </div>
</template>