<script setup>
const pages = ref([
  {
    id: 1,
    title: "Climate Impact on Concrete Sealing in San Bernardino",
    date: "06-12-2024",
    description:
      "Explore how the local climate affects concrete sealing practices and results.",
    link: "/blog/climate-impact-concrete-sealing-san-bernardino",
  },
  {
    id: 2,
    title: "Best Seasons for Concrete Sealing in San Bernardino County",
    date: "05-19-2024",
    description:
      "Identify the best times of the year to seal concrete in the region for optimal results.",
    link: "/blog/best-seasons-concrete-sealing-san-bernardino",
  },
  {
    id: 3,
    title: "Common Concrete Issues in San Bernardino and Their Solutions",
    date: "06-20-2024",
    description:
      "Discuss common concrete problems specific to the region and effective sealing solutions.",
    link: "/blog/common-concrete-issues-san-bernardino",
  },
  {
    id: 4,
    title: "Local Regulations and Permits for Concrete Sealing",
    date: "06-20-2024",
    description:
      "Learn about the regulations and permits required for concrete sealing projects in San Bernardino.",
    link: "/blog/local-regulations-permits-concrete-sealing",
  },
]);
</script>
<template>
  <div>
    <nav class="side-nav flex flex-col">
      <NuxtLink
        :to="page.link"
        class="hover:text-blue-400"
        v-for="page in pages"
        :key="page.id"
        >{{ page.title }}
      </NuxtLink>
    </nav>
  </div>
</template>
<style scoped>
.router-link-active {
  font-weight: bold;
  color: #2563eb;
}
</style>
