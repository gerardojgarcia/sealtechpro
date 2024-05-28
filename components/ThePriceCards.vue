<script setup>
const cards = ref([
    {
        id:1,
        pretitle: 'up to 500 sq. ft.',
        title: 'Small Scale',
        description: 'Ideal for smaller residential projects, our Small Package provides comprehensive concrete sealing services to ensure your driveways, patios, or walkways are protected and enhanced. Enjoy peace of mind with professional service and quality results.',
        pricing: [
            'Up to $3200',

            
        ],
        features: [
            'Surface Preparation',
            'Crack and Joint Repair',
            'Acrylic Sealing',
            'Anti-Slip Treatment',
            'Maintenance and Resealing'
        ]
    },
    {
        id: 2,
        pretitle: 'up to 1000 sq. ft.',
        title: 'Commercial Range',  
        description: 'Perfect for mid-sized residential or commercial projects, the Medium Package offers advanced sealing solutions to keep your concrete surfaces in top condition. Benefit from added durability and aesthetic appeal with our expert services.',
        pricing: [
         'up to $6,200'
        ],
        features: [
        'Surface Preparation',
            'Crack and Joint Repair',
            'Acrylic Sealing',
            'Anti-Slip Treatment',
            'Maintenance and Resealing'

        ]
    },
    {
        id: 3,
        pretitle: 'up to 2000 sq. ft.',
        title: 'large Scale',
        description: 'Our Large Package is designed for extensive residential or commercial projects, providing maximum protection and longevity for your concrete surfaces. Trust SealTech Pro for superior quality and a lasting finish.',
        pricing: [
            'up to $11,000'
        ],
        features: [
        'Surface Preparation',
            'Crack and Joint Repair',
            'Acrylic Sealing',
            'Anti-Slip Treatment',
            'Maintenance and Resealing'
        ]
    }
])

</script>
<template>
    <section class="price-card-container grid grid-cols-1 py-16  dark:text-white dark:bg-dark_slate_gray" data-aos="fade-up">
    <div class="px-4 md:px-60 flex justify-center flex-col items-center">
        <h3 class="pb-4 text-4xl ">Tailored Solar Panel Cleaning & Maintenance Plans</h3>
        <p class="price-cards-subheading text-2xl">Maximize the efficiency and lifespan of your solar panels with SolarSustain's professional cleaning and maintenance services. Choose from our tailored plans designed to fit different needs and scales of solar installations.</p>
    </div>


    <div class="grid md:grid-cols-3 gap-4 mt-24 px-4 md:px-16" >

    <!-- Price Card -->
        <div class="price-card p-8 md:px-10 rounded-lg dark:bg-steel_blue border-2 hover:border-blue-600 dark:hover:border-blue-200 duration-150 ease-in dark:hover:border-3 border-blue-400 hover:shadow-lg flex flex-col" v-for="card in cards" :key="card.id" data-aos="fade-up">
        <p class="pre-title text-lg">{{card.pretitle}}</p>
        <p class="card-title text-4xl font-bold py-2">{{card.title}} </p>
        <p class="card-description text-xl">{{card.description}}</p>
        <ul class="card-pricing flex flex-col py-8 text-xl  " >
            <li v-for="price in card.pricing" :key="card.pricing" ><Icon name="ph:check-circle-bold" color="black" class="mr-2" />{{ price }}</li>

        
        </ul>
        <ul class="card-features list-outside space-y-2" >
        
        <li v-for="feature in card.features" :key="card.features">{{ feature }}</li>

        </ul>
        
        
        <button class="border-2 border-blue-400 rounded-md p-2 md:w-1/4 self-end mt-16 hover:shadow-lg hover:bg-blue-400 hover:text-white duration-150" >Book now</button>
        
        </div>
        
       
    </div>
        
    </section>
</template>