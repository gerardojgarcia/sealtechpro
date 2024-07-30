<script setup>
useHead({
    title: "SealTech Blog",
    description:
        "Useful articles about all things concrete sealing in San Bernardino County",
});
</script>
<template>
    <div class="dark:bg-black h-screen dark:text-white">
        <TheHeader />

        <div class="flex h-[65vh] overflow-y-auto mt-32">
            <AppBlogSideNav class="absolute w-52" />
            <NuxtPage class="ml-60 h-[50vh]" />
        </div>

        <TheFooter />
    </div>
</template>
