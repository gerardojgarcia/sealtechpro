<script setup></script>
<template>
  <div class="dark:bg-black h-screen dark:text-white">
    <TheHeader />

    <div class="flex h-[65vh] overflow-y-auto">
      <AppBlogSideNav class="absolute w-52" />
      <NuxtPage class="ml-52 h-[50vh] " />
    </div>

    <TheFooter />
  </div>
</template>
