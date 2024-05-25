<script setup>
defineProps({
    title: String,

})

</script>
<template>
    <div class="hero grid place-items-center py-32  h-[75vh] text-black" >
        <div class="heading md:w-1/2 flex flex-col items-center bg-opacity-85 rounded-lg py-6 bg-white ">
            <h1 class="text-5xl text-center m-auto text-black  px-12">{{title}}</h1>
            
        </div>
        
        

    </div>
</template>
<style scoped>

.hero {
    background-image: url('/solar_sustain_5.webp');
    background-repeat: no-repeat;
    background-position: top;
    background-size: auto;
}

</style>