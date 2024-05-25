<script setup>
const pages = ref([
  {
    id: 1,
    title: "Why Hire Professional Solar Panel Cleaners?",
    date: "05-19-2024",
    description:
      "Explore the top reasons to choose professional services for solar panel cleaning.",
    link: "/blog/why-hire-professional-solar-panel-cleaners",
  },
  {
    id: 2,
    title: "How Professional Solar Panel Cleaning Works",
    date: "05-19-2024",
    description:
      "A detailed look at the steps and techniques used by professional cleaners.",
    link: "/blog/how-professional-solar-panel-cleaning-works",
  },
  {
    id: 3,
    title: "Cost-Effectiveness of Professional Solar Panel Services",
    date: "05-19-2024",
    description:
      "Analysis of the financial benefits of using professional cleaning services.",
    link: "/blog/cost-effectiveness-professional-solar-panel-services",
  }
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
  color: #2563EB;
}



</style>
