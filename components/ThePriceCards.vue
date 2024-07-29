<script setup>
const cards = ref([
    {
        id: 1,
        pretitle: "Adequate Protection",
        title: "Basic package",
        description:
            "The Basic Package offers essential concrete sealing services, perfect for small residential projects. Ensure your concrete surfaces are prepared and sealed for basic protection and durability.",
        pricing: ["starting at $225", "minimum 150 sq. ft."],
        features: [
            "Surface Preparation",
            "Acrylic Sealing",
            "10 Year Guarantee",
        ],
    },
    {
        id: 2,
        pretitle: "Long-lasting Coverage",
        title: "Standard Package",
        description:
            "Our Standard Package includes additional joint and crack repairs to provide a more comprehensive solution for your concrete surfaces. Ideal for homeowners looking to maintain the integrity and appearance of their driveways, patios, or walkways.",
        pricing: ["starting at $375", "minimum 150 sq. ft."],
        features: [
            "Surface Preparation",
            "Crack and Joint Repair",
            "Acrylic Sealing",
            "50 Year Guarantee",
        ],
    },
    {
        id: 3,
        pretitle: "Full Protection",
        title: "Premium Package",
        description:
            "The Premium Package is designed for those who want the best for their concrete surfaces. This package includes all our top services to ensure maximum protection, durability, and safety. Perfect for larger residential or commercial projects.",
        pricing: ["starting at $825", "minimum 150 sq. ft."],
        features: [
            "Surface Preparation",
            "Crack and Joint Repair",
            "Acrylic Sealing",
            "Anti-Slip Treatment",
            "Maintenance and Resealing",
            "Lifetime Guarantee",
        ],
    },
]);
</script>
<template>
    <section
        class="price-card-container grid grid-cols-1 py-16 dark:text-white dark:bg-dark_slate_gray"
        data-aos="fade-up"
    >
        <div class="px-4 md:px-60 flex justify-center flex-col items-center">
            <h3 class="pb-4 text-4xl">Flat Rate Pricing on all our work</h3>
            <p class="price-cards-subheading text-2xl">
                At SealTech Pro, we offer a comprehensive range of concrete
                sealing services tailored to meet the needs of residential,
                commercial, and industrial clients. From surface preparation and
                crack repair to applying various types of sealants, our expert
                team ensures your concrete surfaces are protected, durable, and
                visually appealing. Explore our service packages to find the
                perfect solution for your project.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 mt-24 px-4 md:px-16">
            <!-- Price Card -->
            <div
                class="price-card p-8 md:px-10 rounded-lg dark:bg-steel_blue border-2 hover:border-blue-600 dark:hover:border-blue-200 duration-150 ease-in dark:hover:border-3 border-steel_blue hover:shadow-lg flex flex-col"
                v-for="card in cards"
                :key="card.id"
                data-aos="fade-up"
            >
                <div class="mb-auto">
                    <p class="pre-title text-lg">{{ card.pretitle }}</p>
                    <p class="card-title text-4xl font-bold py-2">
                        {{ card.title }}
                    </p>
                    <ul class="card-pricing flex flex-col py-8 text-xl">
                        <li v-for="price in card.pricing" :key="card.pricing">
                            <Icon
                                name="ph:check-circle-bold"
                                color="black"
                                class="mr-2"
                            />{{ price }}
                        </li>
                    </ul>
                    <ul class="card-features list-outside space-y-2 mb-8">
                        <li
                            v-for="feature in card.features"
                            :key="card.features"
                            class="font-bold"
                        >
                            {{ feature }}
                        </li>
                    </ul>
                    <p class="card-description text-xl">
                        {{ card.description }}
                    </p>
                </div>

                <NuxtLink
                    to="/quote"
                    class="flex justify-center border-2 border-safety_orange rounded-md p-2 md:w-1/4 self-end mt-16 hover:shadow-lg hover:bg-safety_orange hover:text-white duration-150"
                >
                    Book now
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
